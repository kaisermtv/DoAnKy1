<section class="menu cid-qNRpk6PvSD" once="menu" id="menu1-h">
         <nav class="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <div class="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
            </button>
            <div class="menu-logo">
               <div class="navbar-brand">
                  <span class="navbar-logo">
                  <a href="/home.asp">
                  <img src="/assets/images/mbr-758x531.jpg" title="" style="height: 3.8rem;">
                  </a>
                  </span>
                  <span class="navbar-caption-wrap"><a class="navbar-caption text-white display-4" href="home.asp"><%= GetSetting("Name") %></a></span>
               </div>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
					<%
						Set Table = GetListRootMenu()
						
						Do While NOT Table.Eof
					%>
					<li class="nav-item">
						<a class="nav-link link text-white display-4" href="<%= GetMenuLink(Table("Menu_Type"),Table("Menu_Link")) %>" aria-expanded="false"><%= Table("Menu_Name") %></a>
					</li>
					<%	
						Table.movenext
						loop
						Table.close()
						set Table = nothing
					%>
               </ul>
            </div>
         </nav>
      </section>
      <section style="width:100%;height:64px;">
	  </section>