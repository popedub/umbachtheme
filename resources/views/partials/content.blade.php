<article @php(post_class('lg:border-t-2 border-b-2 lg:border-b-0 border-black md:flex'))>
  <header class="pl-3 md:px-5 py-5 md:w-1/3 md:border-r-2 border-black">
    <h2 class="entry-title mb-0">
        {!! $title !!}
    </h2>
    <h3 class="@isfield('italic', true) subtitle @endfield mb-2">@field('subtitle')</h3>
    <p>@field('zusa')</p>
    <p class="">@field('city')@hasfield('date_init'),
      @field('date_init')@endfield
      @hasfield('date_end')@field('date_end')@endfield</p>
  </header>

  <div class="content md:w-2/3">
    @hasfield('gallery')

    <?php
      $galeria = get_field('gallery');
    ?>
    <div class="swiper galeria md:w-full float-left">
        <div class="swiper-wrapper">
          @foreach ($galeria as $foto)
            <div class="swiper-slide">
                    <?php
                    $id = $foto['id'];
                    $size = get_field('sizes', $id);
                    ?>



                          @if(strcmp('full', $size ) === 0)
                            <img src="{{ $foto['url'] }}" alt="" class="object-cover w-screen h-[91%] lg:h-[93%] xl:h-[95%]">
                          @else
                            <img src="{{$foto['sizes']['medium_large']}}" alt="" class="h-[91%] lg:h-[93%] xl:h-[95%]">

                          @endif
                        <div class="caption
                        text-tel-pie md:text-pad-pie xl:text-1280-pie 2xl:text-pie 3xl:text-1920-pie
                        absolute bottom-0 left-10 lg:left-9 ">{{ $foto['caption'] }}</div>


            </div>
          @endforeach
        </div>
                    <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="button-prev"></div>
            <div class="button-next"></div>
    </div>
    @endfield
   @if (has_post_thumbnail() && !$galeria)
    <div class="md:w-3/5">@thumbnail('medium-large')</div>
   @endif



    @hasfield('intro')

    <div class="w-full pl-3 md:pr-9 pr-5 md:pb-5 pt-5 float-left" x-data="{ expanded: false }">

    <div class="intro">
        @field('intro')
    </div>

      @hasfield('content')
      <div x-show="expanded" x-collapse.duration.500ms>
        <div class="content">
          @field('content')
        </div>
      </div>
      <button class="mx-auto flex items-center justify-center w-10 md:w-7 py-6"
        @click="expanded = ! expanded" >
        <span :class="{ 'hidden': expanded}">
          <div class="rotate-90">
            @svg('images.arrow', 'w-10 md:w-7')

          </div>
        </span>
        <span :class="{ 'hidden': ! expanded}">
          <div class="-rotate-90">
              @svg('images.arrow', 'w-10 md:w-7')
          </div>
        </span>
      </button>
      @endfield


    </div>
    @endfield

</article>
