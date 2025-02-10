ServerEvents.recipes((event) => {
    const { create } = event.recipes
    create.mixing("minecraft:elytra", [
        Fluid.of("create:potion",500,{Potion:"minecraft:slow_falling" }),
        Fluid.of("create_enchantment_industry:hyper_experience",100),
        "les:pre_elytra",
        Item.of("minecraft:gray_dye",2)
    ]).superheated().processingTime(600);
})