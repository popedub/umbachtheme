<article @php(post_class())>
    <header>



    </header>

    <div class="entry-content lg:border-t-2 border-b-2 border-black">
        @php($galeria = get_field('galeria'))

        @if ($galeria)
            <!-- Slider main container -->
            <div id="galeria" class="swiper">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <?php
                    $i = 0;
                    ?>
                    @foreach ($galeria as $foto)
                    <?php
                    $id = $foto['id'];
                    $size = get_field('sizes', $id);

                    ?>

                        <div class="swiper-slide flex items-center justify-center slide{{ $i }}">

                          @if(strcmp('full', $size ) === 0)
                            <img src="{{ $foto['url'] }}" alt="" class="object-cover w-screen">
                          @else
                            <img src="{{ $foto['sizes']['large'] }}" alt="" class="object-scale-down">
                          @endif


                        </div>
                        <?php
                          $i++;
                        ?>
                    @endforeach
                </div>


                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>


        @endif
    </div>

    <footer id="footer-single" class="flex justify-between items-center px-3 lg:px-5 h-full">
        <h2 class="entry-title mb-0">
            {!! $title !!}
        </h2>
        <h3 class="mb-0">
         @if ($galeria)
         @php($i = 0)
           @foreach ($galeria as $foto)
           <div id="caption{{ $i }}" class="captions hidden cap{{ $i }}">
              {{ $foto['caption'] }}
           </div>
          @php($i++)
           @endforeach
         @endif


        </h3>
    </footer>


</article>
