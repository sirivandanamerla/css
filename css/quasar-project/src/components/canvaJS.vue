<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-white text-dark q-pa-sm">
      <div class="row items-center justify-between">
        <div class="row items-center">
          <q-input dense borderless placeholder="Search entire store here.." class="q-mr-md">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="absolute-center">
          <img src="src/assets/Vector Smart Object.png" alt="Diamond Logo" style="height: 40px;" />
        </div>
        <div class="column items-end">
          <span class="text-caption q-mb-sm">EXCL. VAT (NON-EU COUNTRIES)</span>
          <div>
            <q-btn flat round icon="favorite_border" />
            <q-btn flat round icon="shopping_cart" />
            <q-btn flat round icon="person" />
          </div>
        </div>
      </div>
      <div>
        <q-btn flat label="Engagement Ring" icon-right="keyboard_arrow_down" />
        <q-btn flat label="Wedding Ring" icon-right="keyboard_arrow_down" />
        <q-btn flat label="Fine Jewelry" icon-right="keyboard_arrow_down" />
        <q-btn flat label="Gemstone" icon-right="keyboard_arrow_down" />
      </div>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-none">
        <div class="row no-wrap">
          <q-img src="src/assets/Mask Group 38.png" />
        </div>
        <div class="bg-black text-white text-center q-pa-xl">
          <div class="text-h4 q-mb-md text-italic">The promise of love</div>
          <div class=" q-mb-md">
            We don’t sell jewelry, we sell memories
          </div>
          <q-btn color="black" text-color="white" style="border: 1px solid white;" label="EXPLORE NOW" />
        </div>
        <div class="q-mt-lg"></div>
        <div class="bg-gold text-center q-pa-xl">
          <div class="text-h5 q-mb-md">DISCOVER DIAMOND CUTS</div>
          <div class="text-body2 q-mb-lg">
            Our diamond cutters are masters in the intense work done
            <br />
            in order to get your diamond to sparkle. Select a cut in order to look
            for jewellery in your desired style.
          </div>
          <div class="row justify-center q-gutter-xl">
            <div class="column items-center">
              <q-img src="src/assets/briljant_2x.svg" style="width: 60px; height: 60px;" />
              <div class="text-subtitle2 q-mt-sm">Brilliant</div>
            </div>

            <div class="column items-center">
              <q-img src="src/assets/cushion_2x.svg" style="width: 60px; height: 60px;" />
              <div class="text-subtitle2 q-mt-sm">Cushion</div>
            </div>

            <div class="column items-center">
              <q-img src="src/assets/princess_2x.svg" style="width: 60px; height: 60px;" />
              <div class="text-subtitle2 q-mt-sm">Princess</div>
            </div>

            <div class="column items-center">
              <q-img src="src/assets/emerald_2x.svg" style="width: 60px; height: 60px;" />
              <div class="text-subtitle2 q-mt-sm">Emerald</div>
            </div>

            <div class="column items-center">
              <q-img src="src/assets/ovaal_2x.svg" style="width: 60px; height: 60px;" />
              <div class="text-subtitle2 q-mt-sm">Oval</div>
            </div>

            <div class="column items-center">
              <q-img src="src/assets/hart_2x.svg" style="width: 60px; height: 60px;" />
              <div class="text-subtitle2 q-mt-sm">Heart</div>
            </div>

            <div class="column items-center">
              <q-img src="src/assets/markies_2x.svg" style="width: 60px; height: 60px;" />
              <div class="text-subtitle2 q-mt-sm">Marquise</div>
            </div>

            <div class="column items-center">
              <q-img src="src/assets/radiant_2x.svg" style="width: 60px; height: 60px;" />
              <div class="text-subtitle2 q-mt-sm">Radiant</div>
            </div>

            <div class="column items-center">
              <q-img src="src/assets/peer_2x.svg" style="width: 60px; height: 60px;" />
              <div class="text-subtitle2 q-mt-sm">Pear</div>
            </div>
          </div>
        </div>
        <div class="bg-grey-1 text-center q-pa-xl">
          <div class="text-h5 q-mb-md">Shop By Category</div>
          <div class="text-body2 q-mb-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </div>

          <div class="row justify-center q-gutter-xl">
            <div class="column items-center">
              <div class="column items-center">
                <q-img src="src\assets\Assests\Shop by category\pexels-zara-hamdane-12371883.png"
                  style="width: 200px; height: 200px; border-radius: 8px; overflow: hidden;" class="cursor-pointer">
                  <div class="absolute-bottom text-white ">
                    Engagement Rings
                  </div>
                </q-img>
              </div>
            </div>
            <div class="column items-center">
              <q-img src="src\assets\Assests\Shop by category\Artboard 2.png" style="width: 150px; height: 150px;" />
              <div class="text-subtitle2 q-mt-sm">Wedding Rings</div>
            </div>

            <div class="column items-center">
              <q-img
                src="src\assets\Assests\Shop by category\portrait-of-caucasian-woman-wearing-celtic-knot-ea-2021-08-31-17-22-20-utc.png"
                style="width: 150px; height: 150px;" />
              <div class="text-subtitle2 q-mt-sm">Diamond Earrings</div>
            </div>

            <div class="column items-center">
              <q-img src="src\assets\Assests\Shop by category\Artboard 1.png" style="width: 150px; height: 150px;" />
              <div class="text-subtitle2 q-mt-sm">Diamond Necklaces</div>
            </div>

            <div class="column items-center">
              <q-img src="src\assets\Assests\Shop by category\461wmod.png" style="width: 150px; height: 150px;" />
              <div class="text-subtitle2 q-mt-sm">Diamond Bracelets</div>
            </div>
          </div>
        </div>
        <div>
          <q-img src="src\assets\Untitled-2.png" style="height: 400px; border-radius: 8px; overflow: hidden;">
            <div class="q-pl-xl text-white q-pa-xl">
              <div class="text-h6 q-ml-md">FEEL EVERY</div>
              <div class="text-h2 text-bold q-mb-md q-ml-md">MOMENT</div>
              <div class="text-subtitle1 q-mb-lg">WITH OUR DIAMOND WEDDING RINGS</div>
              <q-btn color="black" style="border: 1px solid white;" text-color="white" label="SHOP WEDDING RINGS"
                icon-right="favorite_border" />
            </div>
          </q-img>
        </div>
        <div class="text-center q-pa-xl">
          <div class="text-h5 q-mb-sm">NEW ARRIVALS</div>
          <div class="text-body2 q-mb-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </div>
          <div class="row justify-center q-gutter-lg">
            <div class="column items-center q-pa-md" style="width: 250px; border: 1px solid #eee;">

              <img src="src\assets\Assests\Products\one front.png" alt="Engagement Ring" style="height: 200px;" />
              <div class="text-subtitle1 text-bold q-mt-md">Engagement Ring</div>
              <div class="text-caption q-mt-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div class="text-caption text-italic q-mt-sm">
                Starting From <span class="text-bold">€510.56</span>
              </div>
            </div>
            <div class="column items-center q-pa-md" style="width: 250px; border: 1px solid #eee;">

              <img src="src\assets\Assests\Products\one front-1.png" alt="Diamond Earring" style="height: 200px;" />
              <div class="text-subtitle1 text-bold q-mt-md">Diamond Earring</div>
              <div class="text-caption q-mt-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div class="text-caption text-italic q-mt-sm">
                Starting From <span class="text-bold">€510.56</span>
              </div>
            </div>
            <div class="column items-center q-pa-md" style="width: 250px; border: 1px solid #eee;">

              <img src="src\assets\Assests\Products\one front-2.png" alt="Diamond Necklace" style="height: 200px;" />
              <div class="text-subtitle1 text-bold q-mt-md">Diamond Necklace</div>
              <div class="text-caption q-mt-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div class="text-caption text-italic q-mt-sm">
                Starting From <span class="text-bold">€510.56</span>
              </div>
            </div>
            <div class="column items-center q-pa-md" style="width: 250px; border: 1px solid #eee;">

              <img src="src\assets\Assests\Products\one front-3.png" alt="Diamond Bracelet" style="height: 200px;" />
              <div class="text-subtitle1 text-bold q-mt-md">Diamond Bracelet</div>
              <div class="text-caption q-mt-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div class="text-caption text-italic q-mt-sm">
                Starting From <span class="text-bold">€510.56</span>
              </div>
            </div>

          </div>

          <div class="q-mt-xl">
            <q-btn outline color="black" label="Show more" icon-right="keyboard_arrow_down" />
          </div>
        </div>
        <div>
          <q-img src="src\assets\low-angle-happy-couple-nature.png"
            style="height: 400px; border-radius: 8px; overflow: hidden;">

            <div style="height: 400px" class="row items-center ">
              <div class="col-12 col-md-6 q-pa-xl">
                <q-icon name="card_giftcard" size="40px" class="q-mb-md" />
                <div class="text-h5 q-mb-sm">
                  It’s
                </div>
                <div class="text-h5 q-mb-sm">
                  Sparkling Holiday Season
                </div>
                <div class="text-body2 q-mb-lg">
                  It’s time to sparkle! Shop the most beautiful jewelry to give – or to keep for yourself.
                </div>
                <q-btn outline color="black" text="black" label="SURPRISE YOUR LOVED ONE" />
              </div>
            </div>

          </q-img>
        </div>
        <div class="bg-grey-1 q-pa-xl">
          <div class="row items-center justify-around">
            <div class="col-12 col-md-4">
              <div class="row items-center q-mb-md">
                <q-icon name="mdi-instagram" size="32px" color="pink" />
                <span class="text-h6 q-ml-sm">Instagram</span>
              </div>
              <div class="text-body2 q-mb-md">
                #diamonds<br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
                Duis aute inure dolor in reprehenderit in voluptate velit ess
              </div>
              <a href="#" class="text-subtitle2 text-black text-weight-medium" style="text-decoration: underline;">
                SHOW MORE
              </a>
            </div>
            <div class="col-12 col-md-7 row justify-center">
              <q-img src="src/assets/Group 513.png" />
            </div>
          </div>
        </div>

        <div class="bg-gold text-center q-pa-xl">
          <div class="text-h5 q-mb-md">Our Testimonials</div>
          <div class="text-body2 q-mb-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </div>

          <div class="row justify-center q-gutter-xl">
            <q-card flat bordered class="col-12 col-md-4 q-pa-md">
              <q-avatar size="60px" class="q-mb-md">
                <img src="src\assets\Assests\Testimonials\Mask Group 15.png" />
              </q-avatar>
              <div class="text-subtitle1">Customer Name</div>
              <div class="text-body2 q-mt-sm">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.”
              </div>
            </q-card>

            <q-card flat bordered class="col-12 col-md-4 q-pa-md">
              <q-avatar size="60px" class="q-mb-md">
                <img src="src\assets\Assests\Testimonials\Mask Group 16.png" />
              </q-avatar>
              <div class="text-subtitle1">Customer Name</div>
              <div class="text-body2 q-mt-sm">
                “Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.”
              </div>
            </q-card>
          </div>
        </div>
        <div class="bg-grey-2 q-pa-xl">
          <div class="row items-center">
            <div class="col-12 col-md-6">
              <q-img src="src/assets/store.jpg" style="width:100%; border-radius: 8px;" />
            </div>
            <div class="col-12 col-md-6 q-pa-md">
              <div class="text-h5 q-mb-md">VISIT OUR JEWELRY STORES</div>
              <div class="text-body2 q-mb-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
                Duis aute inure dolor in reprehenderit in voluptate velit ess......
              </div>
              <q-btn outline color="black" label="BOOK AN APPOINTMENT" class="q-mr-md" /> Or
              <q-btn class="q-ml-md" outline color="black" label="REQUEST A CALLBACK" />
            </div>
          </div>
        </div>
        <div class="bg-gold-2 text-center q-pa-xl">
          <div class="row justify-around q-mb-xl">
            <div class="column items-center">
              <q-img src="src/assets/diamond.svg" style="width: 60px; height: 60px;" />
              <div class="text-subtitle2 q-mt-sm">Luxury Jewellery</div>
              <div class="text-caption">Precious jewellery you won’t find anywhere else</div>
            </div>
            <div class="column items-center">
              <q-img src="src/assets/rating.svg" style="width: 60px; height: 60px;" />
              <div class="text-subtitle2 q-mt-sm">Exceptional Designers</div>
              <div class="text-caption">Handmade by the world’s best jewellery designers</div>
            </div>
            <div class="column items-center">
              <q-img src="src/assets/award.svg" style="width: 60px; height: 60px;" />
              <div class="text-subtitle2 q-mt-sm">100% Quality Guaranteed</div>
              <div class="text-caption">Everything is checked by experts</div>
            </div>
            <div class="column items-center">
              <q-img src="src/assets/shield.svg" style="width: 60px; height: 60px;" />
              <div class="text-subtitle2 q-mt-sm">Buyer Protection</div>
              <div class="text-caption">We keep your jewellery safe until you receive it</div>
            </div>
          </div>
        </div>
        <div class="q-pa-xl">
          <div class="row justify-around">
            <div class="column">
              <div class="text-subtitle2 q-mb-sm">About Us</div>
              <div class="text-caption">Blog</div>
              <div class="text-caption">Our Story</div>
              <div class="text-caption">Reviews</div>
              <div class="text-caption">Packaging</div>
              <div class="text-caption">Terms & Conditions</div>
            </div>

            <div class="column">
              <div class="text-subtitle2 q-mb-sm">Customer Care</div>
              <div class="text-caption">Free Shipping</div>
              <div class="text-caption">Free 30 Day Returns</div>
              <div class="text-caption">Lifetime Warranty</div>
              <div class="text-caption">Resize Options</div>
              <div class="text-caption">Free Engraving</div>
            </div>

            <div class="column">
              <div class="text-subtitle2 q-mb-sm">Need Help</div>
              <div class="text-caption">Contact Us</div>
              <div class="text-caption">Email Us</div>
              <div class="text-caption">Live Chat</div>
              <div class="text-caption">Track Your Order</div>
              <div class="text-caption">FAQ</div>
            </div>

            <div class="column" style="max-width: 350px;">
              <div class="text-subtitle2 text-weight-bold q-mb-sm">BE IN THE KNOW</div>
              <div class="text-caption q-mb-sm">
                Insider info on sales, new arrivals and buying jewelry like a.
              </div>
              <div class="text-caption q-mb-sm">
                By signing up you confirm that you have read the Privacy Policy and agree that your email and the
                provided
              </div>
              <div class="row items-center no-wrap">
                <q-input dense placeholder="John.doe@gmail.com" class="col q-mr-sm" />
                <q-btn color="black" text-color="white" label="Send me updates" />
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-around items-center q-pa-md bg-white text-grey">
          <div class="row items-center">
            <q-icon name="mdi-copyright" size="16px" class="q-mr-sm" />
            <span class="q-mr-md">Terms of Use</span> |
            <span class="q-mx-md">Privacy Policy</span> |
            <span class="q-mx-md">Return and Refund Policy</span> |
            <span class="q-mx-md">Change Cookie Preferences</span>
          </div>
          <div>
            <img src="src/assets/index.svg" alt="Visa" style="height:30px;" />

          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
</script>

<style scoped>
.bg-gold {
  background: linear-gradient(90deg, #d4af37, #f8e1a1);
}
</style>
