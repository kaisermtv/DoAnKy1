<section once="" class="cid-qOxJx7xoDQ" id="footer7-m">
         <div class="container">
            <div class="media-container-row align-center mbr-white">
               <div class="row row-links">
                  <ul class="foot-menu">
					<%
						Set Table = GetListRootMenu()
						
						Do While NOT Table.Eof
					%>
					<li class="foot-menu-item mbr-fonts-style display-7">
                        <a class="text-white mbr-bold" href="<%= GetMenuLink(Table("Menu_Type"),Table("Menu_Link")) %>" target="_blank"><%= Table("Menu_Name") %></a>
                    </li>
					<%	
						Table.movenext
						loop
						Table.close()
						set Table = nothing
					%>
                  </ul>
               </div>
               <div class="row social-row">
                  <div class="social-list align-right pb-2">
                     <div class="soc-item">
                        <a href="#" target="_blank">
                        <span class="socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                     </div>
                     <div class="soc-item">
                        <a href="#" target="_blank">
                        <span class="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                     </div>
                     <div class="soc-item">
                        <a href="#" target="_blank">
                        <span class="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                     </div>
                     <div class="soc-item">
                        <a href="#" target="_blank">
                        <span class="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                     </div>
                     <div class="soc-item">
                        <a href="#" target="_blank">
                        <span class="socicon-googleplus socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                     </div>
                     <div class="soc-item">
                        <a href="#" target="_blank">
                        <span class="socicon-behance socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                     </div>
                  </div>
               </div>
               <div class="row row-copirayt">
                  <p class="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">
                     © Copyright 2018 - All Rights Reserved
                  </p>
               </div>
            </div>
         </div>
      </section>
	  
      <script src="/assets/web/assets/jquery/jquery.min.js"></script>
      <script src="/assets/popper/popper.min.js"></script>
      <script src="/assets/tether/tether.min.js"></script>
      <script src="/assets/bootstrap/js/bootstrap.min.js"></script>
      <script src="/assets/dropdown/js/script.min.js"></script>
      <script src="/assets/viewportchecker/jquery.viewportchecker.js"></script>
      <script src="/assets/parallax/jarallax.min.js"></script>
      <script src="/assets/smoothscroll/smooth-scroll.js"></script>
      <script src="/assets/touchswipe/jquery.touch-swipe.min.js"></script>
      <script src="/assets/theme/js/script.js"></script>
      <input name="animation" type="hidden">
      