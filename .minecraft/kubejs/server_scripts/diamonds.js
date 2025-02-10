ServerEvents.recipes((event) => {
    const { create } = event.recipes;
    create.compacting(
        [
            Item.of("minecraft:diamond").withChance(0.2), 
            Item.of("minecraft:coal_block").withChance(0.75), 
            Item.of("supplementaries:ash", 2).withChance(0.4), 
        ],//output
        [
            Item.of('#c:coal', 32), 
            Fluid.of("minecraft:lava", 320) 
        ]//input
    )
    .superheated().id("les.diamond");
});
