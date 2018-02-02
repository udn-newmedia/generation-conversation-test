<template>
  <div class="innerScrollRegion">
    <div class="innerRegion">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo distinctio cum unde, dolorum in officia sit ex amet ullam omnis totam ad architecto nam soluta eligendi? Voluptatum, reprehenderit atque veniam, tempora ipsam ut deleniti nulla distinctio expedita nihil iste rerum saepe aliquid eveniet ad aperiam, commodi eaque neque voluptate numquam. Eum earum et animi placeat ut autem ab aliquid vero ratione dignissimos tempore, non, iure, accusamus tempora voluptates in numquam. Dolores ipsa rem modi ad facere! Soluta sit quasi laborum suscipit nemo neque, ex libero nesciunt sequi veniam est aut inventore labore amet cupiditate deleniti reprehenderit alias ipsa dicta, sunt, exercitationem quae consequuntur nulla! Vero eius odio totam dicta. Voluptates, tenetur blanditiis, explicabo molestias repellat, commodi consequuntur fuga cum sequi sint provident labore. Recusandae voluptate odio enim pariatur illo mollitia nisi deserunt doloribus repellendus ullam, obcaecati voluptatibus, est nemo porro, sint expedita! Possimus magnam necessitatibus sequi voluptatum, vero, impedit delectus fuga atque, reiciendis sed est esse nihil. Ipsam consectetur est nam quasi id fuga a, officia qui aliquid quo odio suscipit ad ex earum ab tempore nostrum saepe, similique error veritatis laborum? Officiis inventore nemo magnam fugiat. Praesentium officiis incidunt fugit cumque, at vero rem optio. Ea repudiandae similique a ut architecto, quibusdam necessitatibus qui magnam veniam suscipit alias error porro voluptas cum tempore. Libero, similique dolores? Facere, repudiandae eveniet quaerat ipsum tempora voluptatem accusamus. Incidunt, aperiam illo molestiae expedita in sint? Quod, laudantium. Obcaecati sed debitis possimus deserunt necessitatibus! Impedit inventore quidem ea aliquam, nihil numquam voluptates. Eius ut magnam natus, nulla accusamus sed praesentium possimus vitae repellendus ad officiis. Possimus vero rerum sunt quas consequuntur aspernatur deserunt minima odio eaque animi maiores minus, vitae quibusdam nemo reprehenderit blanditiis voluptate aliquam? Numquam eveniet saepe, eos fugiat dolor, praesentium magnam, repudiandae possimus tempore illo ea incidunt dolore. Et, temporibus.
    </div>
  </div>
</template>

<script>
export default {
  name: 'innerScrollRegion'
}
</script>

<style scoped>
  .innerScrollRegion{
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: solid 1px black; */
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
  }
  .innerRegion{
    /* border: solid 1px blue; */
    width: 300px;
    height: 100vh;
    overflow: auto;
  }

  .innerRegion::-webkit-scrollbar { 
    display: none; 
  }  
</style>
