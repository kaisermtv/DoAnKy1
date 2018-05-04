<%
	IF page = "" THEN
		Response.redirect("/index.asp")
	End if
%>
<%
	Function GetListContact(page,limit)
		Dim sql,rownum 
		rownum = (page-1)*limit
		
		sql = "SELECT TOP " & limit & " * FROM (SELECT *,(ROW_NUMBER() OVER(ORDER BY [Contact_Date] DESC)) AS RowNum FROM [dbo].[tblContact] ) AS MyDerivedTable WHERE RowNum > " & rownum
		
		SET GetListContact = SqlQuery(sql)
	End Function 

	Function CreateContact(name,phone,email,Description)
		Dim sql
		
		sql = "INSERT INTO [dbo].[tblContact](Contact_Name,Contact_Phone,Contact_Email,Contact_Description,Contact_Status,Contact_Date)" & _
			  " VALUES(N'"& name &"',N'"& phone &"',N'"& email &"',N'"& Description &"',0,GETDATE())"
		
		SqlQuery(sql)
	End Function 
	
	Function UpdateContact(id,note,status)
		Dim sql 
		
		IF status = "" THEN 
			status = 0
		END IF
		
		sql = "UPDATE [dbo].[tblContact] SET Contact_Note = N'"& note &"',Contact_Status = "& status &" WHERE Contact_Id = " & id
		
		SqlQuery(sql)
	End Function 
	
	Function GetContact(id)
		dim sql
		sql = "SELECT * FROM [dbo].[tblContact] WHERE Contact_Id = " & id
		
		SET GetContact = SqlQuery(sql)
	End Function
	
	Function GetNameStatusContact(status)
		IF StrComp(status,"0") = 0 THEN 
			GetNameStatusContact = "Chờ duyệt"
		ELSEIF StrComp(status,"1") = 0 THEN
			GetNameStatusContact = "Đã duyệt"
		ELSEIF StrComp(status,"2") = 0 THEN
			GetNameStatusContact = "Đang xử lý"
		ELSE
			GetNameStatusContact = "./."
		END IF
	End Function
%>