<div class="swiper-slide flex items-center justify-center min-h-full">
    <a href="@permalink" class="tooltip relative">
        <?php
        $id = get_post_thumbnail_id();
        $size = get_field('sizes', $id);

        ?>

        <span>@title</span>
        @if(strcmp('full', $size ) === 0)
        <img src="@thumbnail('large', false)" alt=""
                class="object-cover w-screen h-[364px] lg:h-auto xl:h-[728px]">
        @else
        <img src="@thumbnail('large', false)" alt=""
                class="object-contain lg:object-scale-down h-[364px] lg:h-auto xl:h-[728px]">
        @endif

    </a>
</div>

