ServerEvents.recipes((event) => {
    const { create } = event.recipes;
    create.mixing(
        [
            Item.of("minecraft:coal",8),
            Item.of("supplementaries:ash", 4).withChance(0.25), 
        ], //output
        [
            Item.of("minecraft:charcoal",9),
            Item.of("supplementaries:ash", 8), 
            Fluid.of("minecraft:lava",20),
        ]//input
    ).heated().id("les.coal");
});
