<div class="w-full lg:border-t-2 border-black lg:h-[728px] flex flex-col-reverse lg:flex-row">
    <div id="sub-container" class="lg:text-texto pl-5 pr-5 lg:pr-20 lg:pt-5 content">
        @php(the_content())
    </div>
    <div id="foto" class="mb-5 lg:mb-0">
      @thumbnail('large')
    </div>

</div>
