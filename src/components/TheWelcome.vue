<script setup></script>

<template>
  <div style="background-color: #804000; color: white; padding-block: 2rem">
    <h1 style="text-align: center">ต้อนรับเข้าสู่เว็บสั่งเมนูอาหารทันใจ</h1>
    <h3 style="text-align: center">
      พื้นที่นี้จะช่วยให้ทุกคนสามารถสั่งอาหารที่ต้องการ กลับไปรับประทานที่บ้านได้อย่างจุใจ
      !!!
    </h3>
  </div>
  <v-carousel cycle height="600" hide-delimiter-background show-arrows="hover">
    <v-carousel-item
      src="https://www.scb.co.th/content/dam/scb/personal-banking/stories-tips/thai-food/thai-food10.jpg"
      cover
    />
    <v-carousel-item
      src="https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSElx8bVCw1tUKSktxbi65L7bs8ljC.jpg"
      cover
    />
    <v-carousel-item
      src="https://s359.kapook.com/rq/580/435/50/pagebuilder/b1073e89-602b-4323-b253-33cca2c00044.jpg"
      cover
    />
    <v-carousel-item
      src="https://s359.kapook.com/rq/580/435/50/pagebuilder/2fd83831-fb5b-4317-85c8-8cef0f756423.jpg"
      cover
    />
  </v-carousel>
  <v-container>
    <v-row>
      <v-col>
        <v-img
          src="https://s.isanook.com/he/0/rp/rc/w670h402/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hlLzAvdWQvNi8zNDk5Ny9rYXByYXctdGhhaS1mb29kLmpwZw==.jpg"
          aspect-ratio="1"
          cover
        />
        <v-img
          src="https://www.knorr.com/content/dam/unilever/knorr_world/thailand/digital_and_online/banner_cat_method_%E0%B8%A2%E0%B8%B3%E0%B8%A2%E0%B8%AD%E0%B8%94%E0%B8%9F%E0%B8%B1%E0%B8%81%E0%B9%81%E0%B8%A1%E0%B9%89%E0%B8%A7%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%9E%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B9%80%E0%B8%9C%E0%B8%B2-34932863-jpg.jpg"
          aspect-ratio="1"
          cover
        />
        <v-img
          src="https://s359.kapook.com/rq/580/435/50/pagebuilder/dbc77e85-1cb6-44ff-a3d8-dc6b21f59d5a.jpg"
          aspect-ratio="1"
          cover
        />
        <v-img
          src="https://www.apthai.com/images/production/POBL0bRFlFSZdaEZahrXBmnKCIR8PrnWi9tDBxYb.jpg"
          aspect-ratio="1"
          cover
        /> </v-col
      ><v-col>
        <v-img
          src="https://www.knorr.com/content/dam/unilever/global/recipe_image/218/21853/218533-default.jpg/jcr:content/renditions/original"
          aspect-ratio="1"
          cover
        />
        <v-img
          src="https://img-global.cpcdn.com/recipes/bdf280f94d7fbe30/680x482cq70/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%8A%E0%B8%B2%E0%B8%87%E0%B8%B2%E0%B8%A2%E0%B9%86.jpg"
          aspect-ratio="1"
          cover
        />
        <v-img
          src="https://img.wongnai.com/p/1920x0/2019/02/19/3a9dca18fd854a7e8e580368b149cfd6.jpg"
          aspect-ratio="1"
          cover
        />
        <v-img
          src="https://i0.wp.com/inzpy.com/wp-content/uploads/2022/05/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AB%E0%B8%B2-copy-5-36.jpg?resize=696%2C446&ssl=1"
          aspect-ratio="1"
          cover
        /> </v-col
      ><v-col>
        <v-img
          src="data:image/jpeg;base64,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"
          aspect-ratio="1"
          cover
        />
        <v-img
          src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000460/img/basic/a0000460_main.jpg?20170412181434"
          aspect-ratio="1"
          cover
        />
        <v-img
          src="https://img.winnews.tv/files/site/44d183bbbac316eec07b0b042a475e19.jpg"
          aspect-ratio="1"
          cover
        />
        <v-img
          src="https://www.knorr.com/content/dam/unilever/knorr_world/thailand/digital_and_online/banner_subcat_cuisinethai_%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%A1%E0%B8%B1%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%81%E0%B9%88-34933161-jpg.jpg"
          aspect-ratio="1"
          cover
        /> </v-col
      ><v-col>
        <v-img
          src="https://krua.co/wp-content/uploads/2020/06/ImageBannerMobile_960x633-01-135.jpg"
          cover
        />
        <v-img
          src="http://www.jgbthai.com/wp-content/uploads/2019/01/201901141113221547439202230.jpg"
          cover
        />
        <v-img
          src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5BtznVNTVxtL5gW0DeyL6ElelBqCUezVrzI0NSiMrgcnCsqXvZ9.jpg"
          cover
        />
        <v-img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Foi_thong.jpg/1200px-Foi_thong.jpg"
          cover
        />
      </v-col>
    </v-row>
  </v-container>
  <div class="d-flex justify-center" style="margin-bottom: 2rem">
    <RouterLink to="/login">
      <v-btn color="orange" size="x-large" variant="elevated">Log In To Add Menu</v-btn>
    </RouterLink>
  </div>
</template>
