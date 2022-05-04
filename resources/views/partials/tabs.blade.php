<div x-data="{ tab: window.location.hash ? window.location.hash.substring(1) : 'description' }" id="tab_wrapper">
  <!-- The tabs navigation -->
  <nav>
    <a :class="{ 'active': tab === 'description' }" @click.prevent="tab = 'description'; window.location.hash = 'description'" href="#">Description</a>
    <a :class="{ 'active': tab === 'reviews' }" @click.prevent="tab = 'reviews'; window.location.hash = 'reviews'" href="#">Reviews</a>
  </nav>

  <!-- The tabs content -->
  <div x-show="tab === 'description'">
    Lorem ipsum description.
  </div>
  <div x-show="tab === 'reviews'">
    Lorem ipsum reviews.
   </div>

</div>
