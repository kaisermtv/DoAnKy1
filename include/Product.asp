<%
	Function GetListProduct(page,limit)
		Dim sql,rownum 
		rownum = (page-1)*limit
		
		sql = "SELECT TOP " & limit & " * FROM (SELECT *,(ROW_NUMBER() OVER(ORDER BY [Product_EditDate] DESC)) AS RowNum FROM [dbo].[tblProduct] ) AS MyDerivedTable WHERE RowNum > " & rownum
		
		SET GetListProduct = SqlQuery(sql)
	End Function

	Function GetProduct(id)
		dim sql,ret
		sql = "SELECT * FROM [dbo].[tblProduct] WHERE Product_Id = " & id
		
		set GetProduct = SqlQuery(sql)
	End Function
	
	Function DeleteProduct(id)
		dim sql,ret
		sql = "DELETE FROM [dbo].[tblProduct] WHERE Product_Id = " & id
		
		SqlQuery(sql)
	End Function
	
	Function CreateProduct(name,paren,img,price,component,des,content)
		Dim sql 
		sql = "INSERT INTO [dbo].[tblProduct](Product_Name,Product_Description,Product_Component,Product_Content,Product_Image,Product_Price,Cat_Id,User_Acount,Product_Status,Product_EditDate,Product_Date)" & _
			  " VALUES(N'"& name &"',N'"& des &"',N'"& component &"',N'"& content &"',N'"& img &"',N'"& price &"',"& paren &",N'"& User_Acount &"',0,GETDATE(),GETDATE())"
		
		SqlQuery(sql)
	End Function 
	
	Function UpdateProduct(Id,name,paren,img,price,component,des,content)
		Dim sql 
		sql = "UPDATE [dbo].[tblNews] SET Product_Name = N'"& name &"',Product_Description = N'"& des &"',Product_Component = N'"& component &"',Product_Content = N'"& content &"',Product_Image = N'"& img &"',Product_Price = N'"& price &"',Cat_Id = "& paren &",Product_EditBy = N'"& User_Acount &"',Product_Status = 0,Product_EditDate = GETDATE() WHERE News_Id = " & Id
		
		SqlQuery(sql)
	End Function 
%>