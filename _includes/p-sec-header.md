<div class="-none p-sec">
   <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-xl-8">
         <div class="row">
            <div class="col-12 col-md-4 col-lg-3">
               <h2>{{include.header}}</h2>
               <strong class="d-block mb-4">{{include.subheader}}</strong>
            </div>
            <div class="col">
               {{include.content | markdownify}}
            </div>
            <div class="col-12 col-lg-3"></div>
         </div>
      </div>
   </div>
</div>