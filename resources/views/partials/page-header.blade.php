<div class="page-header grow text-center text-rojo py-3 lg:py-0 border-b-2 border-black lg:border-0">
  @if (is_page_template(array ('template-classes.blade.php', 'template-verkauf.blade.php')) || is_single())
    <a href="{{ get_category_link(2) }}" class="">
      <h1>{!! $title !!}</h1>
    </a>
  @else
    <h1>{!! $title !!}</h1>
  @endif

</div>
