
export const useEmojiData = () => {
    const emojiCategories = {
        smileys: [
          { emoji: '😀', description: 'Grinning Face' }, 
          { emoji: '😁', description: 'Beaming Face with Smiling Eyes' }, 
          { emoji: '😆', description: 'Grinning Squinting Face' }, 
          { emoji: '🥹', description: 'Smiling Face with Tears' }, 
          { emoji: '😅', description: 'Grinning Face with Sweat' }, 
          { emoji: '😂', description: 'Laughing Face with Tears of Joy' }, 
          { emoji: '🤣', description: 'Rolling on the Floor Laughing Face' }, 
          { emoji: '🥲', description: 'Smiling Face with Tear' }, 
          { emoji: '😊', description: 'Smiling Face with Smiling Eyes'} , 
          { emoji: '😇', description: 'Smiling Face with Halo' }, 
          { emoji: '🙂', description: 'Slightly Smiling Face' }, 
          { emoji: '🙃', description: 'Upside-Down Smiling Face' }, 
          { emoji: '😉', description: 'Winking Face' }, 
          { emoji: '😌', description: 'Relieved Face' },
          { emoji: '😍', description: 'Face with Heart-Eyes' }, 
          { emoji: '🥰', description: 'Smiling Face with Hearts' }, 
          { emoji: '😘', description: 'Face Blowing a Kiss' }, 
          { emoji: '😋', description: 'Face Savoring Food' }, 
          { emoji: '😛', description: 'Face with Tongue Sticking Out' }, 
          { emoji: '😝', description: 'Squinting Face with Tongue Sticking Out' }, 
          { emoji: '😜', description: 'Winking Face with Tongue Sticking Out' }, 
          { emoji: '🤪', description: 'Zany Face with Tongue Sticking Out' }, 
          { emoji: '🤨', description: 'Face with Raised Eyebrow' }, 
          { emoji: '🧐', description: 'Face with Monocle' }, 
          { emoji: '🤓', description: 'Nerd Face' }, 
          { emoji: '😎', description: 'Smiling Face with Sunglasses' },
          { emoji: '🥸', description: 'Disguised Face' }, 
          { emoji: '🤩', description: 'Star-Struck Face' }, 
          { emoji: '🥳', description: 'Partying Face' }, 
          { emoji: '😏', description: 'Smirking Face' }, 
          { emoji: '😒', description: 'Unamused Face' }, 
          { emoji: '😞', description: 'Disappointed Face' }, 
          { emoji: '😔', description: 'Pensive Face' }, 
          { emoji: '😟', description: 'Worried Face' }, 
          { emoji: '😕', description: 'Confused Face' }, 
          { emoji: '😣', description: 'Persevering Face' }, 
          { emoji: '😖', description: 'Confused Face' }, 
          { emoji: '😫', description: 'Frustrated Face' }, 
          { emoji: '🥺', description: 'Pleading Face' }, 
          { emoji: '😢', description: 'Crying Face with One Tear' }, 
          { emoji: '😭', description: 'Face Crying Heavily' }, 
          { emoji: '😤', description: 'Face with Steam from Nose' }, 
          { emoji: '😠', description: 'Angry Face' }, 
          { emoji: '😡', description: 'Very Angry Face' }, 
          { emoji: '🤬', description: 'Swearing Face' }, 
          { emoji: '🤯', description: 'Exploding Head' }, 
          { emoji: '😳', description: 'Shocked Face' }, 
          { emoji: '🥵', description: 'Hot Face' }, 
          { emoji: '🥶', description: 'Cold Face' }, 
          { emoji: '😱', description: 'Face Screaming in Fear' }, 
          { emoji: '😨', description: 'Fearful Face' }, 
          { emoji: '😰', description: 'Anxious Face with Sweat' }, 
          { emoji: '🤗', description: 'Hugging face' }, 
          { emoji: '🤔', description: 'Thinking Face' }, 
          { emoji: '🫣', description: 'Face with Hands Over Mouth and Eyes' }, 
          { emoji: '🤭', description: 'Smiling Face with Hand Over Mouth' }, 
          { emoji: '🫢', description: 'Face with Hand Over Mouth' }, 
          { emoji: '🤫', description: 'Shushing Face' }, 
          { emoji: '🫠', description: 'Melting Face' }, 
          { emoji: '😶', description: 'Face Without Mouth' }, 
          { emoji: '😐', description: 'Neutral Face' }, 
          { emoji: '😑', description: 'Expressionless Face' }, 
          { emoji: '😬', description: 'Grimacing Face' }, 
          { emoji: '🙄', description: 'Face with Rolling Eyes' }, 
          { emoji: '😯', description: 'Hushed Face' }, 
          { emoji: '😦', description: 'Face with Open Mouth' }, 
          { emoji: '🥱', description: 'Yawning Face' }, 
          { emoji: '😴', description: 'Sleeping Face' }, 
          { emoji: '🤤', description: 'Drooling Face' }, 
          { emoji: '😮‍💨', description: 'Exhaling Face' }, 
          { emoji: '🥴', description: 'Woozy Face' }, 
          { emoji: '🤢', description: 'Nauseated Face' }, 
          { emoji: '🤮', description: 'Vomiting Face' }, 
          { emoji: '🤧', description: 'Blowing Nose Face' }, 
          { emoji: '😷', description: 'Face with Medical Mask' }, 
          { emoji: '🤒', description: 'Face with Thermometer' }, 
          { emoji: '🤕', description: 'Face with Head Bandage' }, 
          { emoji: '🤑', description: 'Money-Mouth Face' }, 
          { emoji: '🤠', description: 'Face Wearing Cowboy Hat' }, 
          { emoji: '😈', description: 'Purple Devil Grinning Face' }, 
          { emoji: '👿', description: 'Purple Devil Frowning Face' }, 
          { emoji: '👹', description: 'Ogre' }, 
          { emoji: '👺', description: 'Goblin' }, 
          { emoji: '🤡', description: 'Clown' }, 
          { emoji: '💩', description: 'Poop' }, 
          { emoji: '👻', description: 'Ghost' }, 
          { emoji: '💀', description: 'Skull' }, 
          { emoji: '👽', description: 'Alien' }, 
          { emoji: '🤖', description: 'Robot' }, 
          { emoji: '🎃', description: 'Face Carved into Pumpkin' } 
        ],
    
        animals: [
          { emoji: '🐶', description: 'Dog Face' }, 
          { emoji: '🐱', description: 'Cat Face' }, 
          { emoji: '🐭', description: 'Mouse Face' }, 
          { emoji: '🐹', description: 'Hamster Face' }, 
          { emoji: '🐰', description: 'Rabbit Face' }, 
          { emoji: '🦊', description: 'Fox Face' }, 
          { emoji: '🐻', description: 'Bear Face'}, 
          { emoji: '🐼', description: 'Panda Face'}, 
          { emoji: '🐻‍❄️', description: 'Polar Bear Face' }, 
          { emoji: '🐨', description: 'Koala Face' }, 
          { emoji: '🐯', description: 'Tiger Face' }, 
          { emoji: '🦁', description: 'Lion Face' }, 
          { emoji: '🐮', description: 'Cow Face' }, 
          { emoji: '🐷', description: 'Pig Face' }, 
          { emoji: '🐽', description: 'Pig Nose' }, 
          { emoji: '🐸', description: 'Frog Face' }, 
          { emoji: '🐵', description: 'Monkey Face' }, 
          { emoji: '🙈', description: 'See-No-Evil Monkey' }, 
          { emoji: '🙉', description: 'Hear-No-Evil Monkey' }, 
          { emoji: '🙊', description: 'Speak-No-Evil Monkey' }, 
          { emoji: '🐒', description: 'Monkey' }, 
          { emoji: '🐔', description: 'Chicken' }, 
          { emoji: '🐧', description: 'Penguin' }, 
          { emoji: '🐦', description: 'Bird' }, 
          { emoji: '🐤', description: 'Chick Face' }, 
          { emoji: '🐣', description: 'Hatching Chick' }, 
          { emoji: '🐥', description: 'Chick'}, 
          { emoji: '🦆', description: 'Duck' }, 
          { emoji: '🦅', description: 'Eagle' }, 
          { emoji: '🦉', description: 'Owl' }, 
          { emoji: '🦇', description: 'Bat' }, 
          { emoji: '🐺', description: 'Wolf' }, 
          { emoji: '🐗', description: 'Boar' }, 
          { emoji: '🐴', description: 'Horse' }, 
          { emoji: '🦄', description: 'Unicorn' }, 
          { emoji: '🐝', description: 'Bee' }, 
          { emoji: '🪱', description: 'Worm' }, 
          { emoji: '🐛', description: 'Bug' }, 
          { emoji: '🦋', description: 'Butterfly' }, 
          { emoji: '🐌', description: 'Snail' }, 
          { emoji: '🐞', description: 'Ladybug' }, 
          { emoji: '🐜', description: 'Ant' }, 
          { emoji: '🪰', description: 'Fly' }, 
          { emoji: '🪲', description: 'Beetle' }, 
          { emoji: '🪳', description: 'Cockroach' }, 
          { emoji: '🦟', description: 'Mosquito' }, 
          { emoji: '🦗', description: 'Cricket' }, 
          { emoji: '🕷', description: 'Spider' }, 
          { emoji: '🕸', description: 'Spider Web' }, 
          { emoji: '🦂', description: 'Scorpion' }, 
          { emoji: '🐢', description: 'Turtle' }, 
          { emoji: '🐍', description: 'Snake' }, 
          { emoji: '🦎', description: 'Lizard' }, 
          { emoji: '🦖', description: 'T-Rex' }, 
          { emoji: '🦕', description: 'Sauropod' }, 
          { emoji: '🐙', description: 'Octupus' }, 
          { emoji: '🦑', description: 'Squid' }, 
          { emoji: '🦐', description: 'Shrimp' }, 
          { emoji: '🦞', description: 'Lobster' }, 
          { emoji: '🦀', description: 'Crab' }, 
          { emoji: '🐡', description: 'Blowfish' }, 
          { emoji: '🐠', description: 'Tropical Fish' }, 
          { emoji: '🐟', description: 'Fish' }, 
          { emoji: '🐬', description: 'Dolphin' }, 
          { emoji: '🐳', description: 'Spouting Whale' }, 
          { emoji: '🐋', description: 'Whale' }, 
          { emoji: '🦈', description: 'Shark' }, 
          { emoji: '🐊', description: 'Crocodile' }, 
          { emoji: '🐅', description: 'Tiger' }, 
          { emoji: '🐆', description: 'Leopard' }, 
          { emoji: '🦓', description: 'Zebra' }, 
          { emoji: '🦍', description: 'Gorilla' }, 
          { emoji: '🦧', description: 'Orangutan' }, 
          { emoji: '🦣', description: 'Mammoth' }, 
          { emoji: '🐘', description: 'Elephant' }, 
          { emoji: '🦛', description: 'Hippopotamus' }, 
          { emoji: '🦏', description: 'Rhinoceros' }, 
          { emoji: '🐪', description: 'Camel' }, 
          { emoji: '🐫', description: 'Two-Hump Camel' }, 
          { emoji: '🦒', description: 'Giraffe' }, 
          { emoji: '🦘', description: 'Kangaroo' }, 
          { emoji: '🦬', description: 'Bison' }, 
          { emoji: '🐃', description: 'Water Buffalo' }, 
          { emoji: '🐂', description: 'Ox' }, 
          { emoji: '🐄', description: 'Cow' }, 
          { emoji: '🐎', description: 'Horse' }, 
          { emoji: '🐖', description: 'Pig' }, 
          { emoji: '🐏', description: 'Ram' }, 
          { emoji: '🐑', description: 'Ewe' }, 
          { emoji: '🦙', description: 'Llama' }, 
          { emoji: '🐐', description: 'Goat' }, 
          { emoji: '🦌', description: 'Deer' }, 
          { emoji: '🐕', description: 'Dog' }, 
          { emoji: '🐩', description: 'Poodle' }, 
          { emoji: '🦮', description: 'Guide Dog' }, 
          { emoji: '🐕‍🦺', description: 'Service Dog' }, 
          { emoji: '🐈', description: 'Cat' }, 
          { emoji: '🐓', description: 'Rooster' } 
        ],
    
        food: [
          { emoji: '🍏', description: 'Green Apple' }, 
          { emoji: '🍎', description: 'Red Apple' }, 
          { emoji: '🍐', description: 'Pear' }, 
          { emoji: '🍊', description: 'Tangerine' }, 
          { emoji: '🍋', description: 'Lemon' }, 
          { emoji: '🍌', description: 'Banana' }, 
          { emoji: '🍉', description: 'Watermelon' }, 
          { emoji: '🍇', description: 'Grapes' }, 
          { emoji: '🍓', description: 'Stawberry' }, 
          { emoji: '🫐', description: 'Blueberries' }, 
          { emoji: '🍈', description: 'Melon' }, 
          { emoji: '🍒', description: 'Cherries' }, 
          { emoji: '🍑', description: 'Peach' }, 
          { emoji: '🥭', description: 'Mango' }, 
          { emoji: '🍍', description: 'Pineapple' }, 
          { emoji: '🥥', description: 'Coconut' }, 
          { emoji: '🥝', description: 'Kiwi' }, 
          { emoji: '🍅', description: 'Tomato' }, 
          { emoji: '🫒', description: 'Olive' }, 
          { emoji: '🥑', description: 'Avocado' }, 
          { emoji: '🍆', description: 'Eggplant' }, 
          { emoji: '🥔', description: 'Potato' }, 
          { emoji: '🥕', description: 'Carrot' }, 
          { emoji: '🌽', description: 'Corn' }, 
          { emoji: '🌶', description: 'Hot Pepper' }, 
          { emoji: '🫑', description: 'Bell Pepper'}, 
          { emoji: '🥒', description: 'Cucumber' }, 
          { emoji: '🥬', description: 'Leafy Green' }, 
          { emoji: '🥦', description: 'Brocolli' }, 
          { emoji: '🧄', description: 'Garlic' }, 
          { emoji: '🧅', description: 'Onion' }, 
          { emoji: '🍄', description: 'Mushroom' }, 
          { emoji: '🥜', description: 'Peanuts' }, 
          { emoji: '🌰', description: 'Chestnut' }, 
          { emoji: '🍞', description: 'Bread' }, 
          { emoji: '🥐', description: 'Croissant' }, 
          { emoji: '🥖', description: 'Baguette Bread' }, 
          { emoji: '🥨', description: 'Pretzel' }, 
          { emoji: '🥯', description: 'Bagel' }, 
          { emoji: '🥞', description: 'Pancakes' }, 
          { emoji: '🧇', description: 'Waffle' }, 
          { emoji: '🧀', description: 'Cheese' }, 
          { emoji: '🍖', description: 'Meat on Bone' }, 
          { emoji: '🍗', description: 'Chicken Leg' }, 
          { emoji: '🥩', description: 'Cut of Meat' }, 
          { emoji: '🥓', description: 'Bacon' }, 
          { emoji: '🍔', description: 'Hamburger' }, 
          { emoji: '🍟', description: 'French Fries' }, 
          { emoji: '🍕', description: 'Pizza' }, 
          { emoji: '🌭', description: 'Hot Dog' }, 
          { emoji: '🥪', description: 'Sandwich' }, 
          { emoji: '🌮', description: 'Taco' }, 
          { emoji: '🌯', description: 'Burrito' }, 
          { emoji: '🫔', description: 'Tamale' }, 
          { emoji: '🥙', description: 'Stuffed Flatbread' }, 
          { emoji: '🧆', description: 'Falafel' }, 
          { emoji: '🥚', description: 'Egg' }, 
          { emoji: '🍳', description: 'Cooking Egg' }, 
          { emoji: '🥘', description: 'Pan of Food' }, 
          { emoji: '🍲', description: 'Pot of Food' }, 
          { emoji: '🫕', description: 'Fondue' }, 
          { emoji: '🥣', description: 'Bowl with Spoon' }, 
          { emoji: '🥗', description: 'Green Salad' }, 
          { emoji: '🍿', description: 'Popcorn' }, 
          { emoji: '🧈', description: 'Butter' }, 
          { emoji: '🧂', description: 'Salt' }, 
          { emoji: '🥫', description: 'Canned Food' }, 
          { emoji: '🍱', description: 'Bento Box' }, 
          { emoji: '🍘', description: 'Rice Cracker' }, 
          { emoji: '🍙', description: 'Rice Ball' }, 
          { emoji: '🍚', description: 'Rice' }, 
          { emoji: '🍛', description: 'Curry Rice' }, 
          { emoji: '🍜', description: 'Bowl of Food' }, 
          { emoji: '🍝', description: 'Spaghetti' }, 
          { emoji: '🍠', description: 'Sweet Potato' }, 
          { emoji: '🍢', description: 'Oden' }, 
          { emoji: '🍣', description: 'Sushi' }, 
          { emoji: '🍤', description: 'Shrimp' }, 
          { emoji: '🍥', description: 'Fish Cake' }, 
          { emoji: '🥮', description: 'Moon Cake' }, 
          { emoji: '🍡', description: 'Dango' }, 
          { emoji: '🥟', description: 'Dumpling' }, 
          { emoji: '🥠', description: 'Fortune Cookie' }, 
          { emoji: '🥡', description: 'Takeout Box' }, 
          { emoji: '🦀', description: 'Crab' }, 
          { emoji: '🦞', description: 'Lobster' }, 
          { emoji: '🦐', description: 'Shrimp' }, 
          { emoji: '🦑', description: 'Squid' }, 
          { emoji: '🦪', description: 'Oyster' }, 
          { emoji: '🍦', description: 'Soft Serve Ice Cream'}, 
          { emoji: '🍧', description: 'Shaved Ice' }, 
          { emoji: '🍨', description: 'Ice Cream' }, 
          { emoji: '🍩', description: 'Doughnut' }, 
          { emoji: '🍪', description: 'Cookie' }, 
          { emoji: '🎂', description: 'Birthday Cake' }, 
          { emoji: '🍰', description: 'Shortcake' }, 
          { emoji: '🧁', description: 'Cupcake' }, 
          { emoji: '🥧', description: 'Pie' }, 
          { emoji: '🍫', description: 'Chocolate Bar' }, 
          { emoji: '🍬', description: 'Candy' }
        ],
    
        drink: [
          { emoji: '🍼', description: 'Baby Bottle' }, 
          { emoji: '🥛', description: 'Glass of Milk' }, 
          { emoji: '☕', description: 'Hot Beverage' }, 
          { emoji: '🫖', description: 'Teapot' }, 
          { emoji: '🍵', description: 'Teacup Without Handle' }, 
          { emoji: '🧃', description: 'Juice Box' }, 
          { emoji: '🥤', description: 'Cup with Straw' }, 
          { emoji: '🍶', description: 'Sake' }, 
          { emoji: '🍺', description: 'Beer Mug' }, 
          { emoji: '🍻', description: 'Clinking Beer Mugs' }, 
          { emoji: '🥂', description: 'Clinking Glasses' }, 
          { emoji: '🍷', description: 'Wine Glass' }, 
          { emoji: '🥃', description: 'Tumbler Glass' }, 
          { emoji: '🍸', description: 'Cocktail Glass' }, 
          { emoji: '🍹', description: 'Tropical Drink' }, 
          { emoji: '🧉', description: 'Mate' }, 
          { emoji: '🍾', description: 'Bottle with Popping Cork' }, 
          { emoji: '🧊', description: 'Ice' }, 
          { emoji: '🥄', description: 'Spoon' }, 
          { emoji: '🍴', description: 'Fork and Knife' }, 
          { emoji: '🍽', description: 'Fork and Knife with Plate' }, 
          { emoji: '🥣', description: 'Bowl with Spoon' }, 
          { emoji: '🥡', description: 'Takeout Box' }, 
          { emoji: '🥢', description: 'Chopsticks' }
        ],
    
        activities: [
          { emoji: '⚽', description: 'Soccer Ball' }, 
          { emoji: '🏀', description: 'Basketball' }, 
          { emoji: '🏈', description: 'American Football' }, 
          { emoji: '⚾', description: 'Baseball' }, 
          { emoji: '🥎', description: 'Softball' }, 
          { emoji: '🎾', description: 'Tennis Ball' }, 
          { emoji: '🏐', description: 'Volleyball' }, 
          { emoji: '🏉', description: 'Rugby Ball' }, 
          { emoji: '🥏', description: 'Flying Disk' }, 
          { emoji: '🎱', description: 'Pool 8 Ball' }, 
          { emoji: '🪀', description: 'Yo-Yo' }, 
          { emoji: '🏓', description: 'Ping Pong' }, 
          { emoji: '🏸', description: 'Badminton' }, 
          { emoji: '🏒', description: 'Ice Hockey' }, 
          { emoji: '🏑', description: 'Field Hockey' }, 
          { emoji: '🥍', description: 'Lacrosse' }, 
          { emoji: '🏏', description: 'Cricket' }, 
          { emoji: '🪃', description: 'Boomerang' }, 
          { emoji: '🥅', description: 'Goal Net' }, 
          { emoji: '⛳', description: 'Flag in Hole' }, 
          { emoji: '🪁', description: 'Kite' }, 
          { emoji: '🏹', description: 'Bow and Arrow' }, 
          { emoji: '🎣', description: 'Fishing Pole' }, 
          { emoji: '🤿', description: 'Diving Mask' }, 
          { emoji: '🥊', description: 'Boxing Glove' }, 
          { emoji: '🥋', description: 'Martial Arts Uniform' }, 
          { emoji: '🎽', description: 'Running Shirt' }, 
          { emoji: '🛹', description: 'Skatebaord' }, 
          { emoji: '🛷', description: 'Sled' }, 
          { emoji: '⛸', description: 'Ice Skate' }, 
          { emoji: '🥌', description: 'Curling Stone' }, 
          { emoji: '🎿', description: 'Ski' }, 
          { emoji: '⛷', description: 'Skier' }, 
          { emoji: '🏂', description: 'Snowboarder' }, 
          { emoji: '🪂', description: 'Sky Diving' }, 
          { emoji: '🏋️‍♀️', description: 'Woman Lifting Weights' }, 
          { emoji: '🏋️', description: 'Person Lifting Weights' }, 
          { emoji: '🏋️‍♂️', description: 'Man Lifting Weights' }, 
          { emoji: '🤼‍♀️', description: 'Women Wrestling' }, 
          { emoji: '🤼', description: 'People Wrestling' }, 
          { emoji: '🤼‍♂️', description: 'Men Wrestling' }, 
          { emoji: '🤸‍♀️', description: 'Woman Cartwheeling' }, 
          { emoji: '🤸', description: 'Person Cartwheeling' }, 
          { emoji: '🤸‍♂️', description: 'Man Cartwheeling' }, 
          { emoji: '⛹️‍♀️', description: 'Woman Playing Basketball' }, 
          { emoji: '⛹️', description: 'Person Playing Basketball' }, 
          { emoji: '⛹️‍♂️', description: 'Man Playing Basketball' }, 
          { emoji: '🤺', description: 'Fencer' }, 
          { emoji: '🤾‍♀️', description: 'Woman Palying Handball' }, 
          { emoji: '🤾', description: 'Person Palying Handball' }, 
          { emoji: '🤾‍♂️', description: 'Man Palying Handball' }, 
          { emoji: '🏌️‍♀️', description: 'Woman Golfing' }, 
          { emoji: '🏌️', description: 'Person Golfing' }, 
          { emoji: '🏌️‍♂️', description: 'Man Golfing' }, 
          { emoji: '🏇', description: 'Horse Racing' }, 
          { emoji: '🧘‍♀️', description: 'Woman in Lotus Position' }, 
          { emoji: '🧘', description: 'Man in Lotus Position' }, 
          { emoji: '🧘‍♂️', description: 'Person in Lotus Position' }, 
          { emoji: '🏄‍♀️', description: 'Woman Surfing' }, 
          { emoji: '🏄', description: 'Person Surfing' }, 
          { emoji: '🏄‍♂️', description: 'Man Surfing' }, 
          { emoji: '🏊‍♀️', description: 'Woman Swimming' }, 
          { emoji: '🏊', description: 'Person Swimming' }, 
          { emoji: '🏊‍♂️', description: 'Man Swimming' }, 
          { emoji: '🤽‍♀️', description: 'Woman Playing Water Polo' }, 
          { emoji: '🤽', description: 'Person Playing Water Polo' }, 
          { emoji: '🤽‍♂️', description: 'Man Playing Water Polo' }, 
          { emoji: '🚣‍♀️', description: 'Woman Rowing Boat' }, 
          { emoji: '🚣', description: 'Person Rowing Boat' }, 
          { emoji: '🚣‍♂️', description: 'Man Rowing Boat' }, 
          { emoji: '🧗‍♀️', description: 'Woman Rock Climbing' }, 
          { emoji: '🧗', description: 'Person Rock Climbing' }, 
          { emoji: '🧗‍♂️', description: 'Man Rock Climbing' }, 
          { emoji: '🚵‍♀️', description: 'Woman Mountain Biking' }, 
          { emoji: '🚵', description: 'Person Mountain Biking' }, 
          { emoji: '🚵', description: 'Man Mountain Biking' }
        ],
    
        travel: [
          { emoji: '🚗', description: 'Car' },
          { emoji: '🚕', description: 'Taxi' },
          { emoji: '🚙', description: 'Sport Utility Vehicle' },
          { emoji: '🚌', description: 'Bus' },
          { emoji: '🚎', description: 'Trolleybus' },
          { emoji: '🏎', description: 'Racing Car' },
          { emoji: '🚓', description: 'Police Car' },
          { emoji: '🚑', description: 'Ambulance' },
          { emoji: '🚒', description: 'Fire Engine' },
          { emoji: '🚐', description: 'Minibus' },
          { emoji: '🚚', description: 'Delivery Truck' },
          { emoji: '🚛', description: 'Lorry' },
          { emoji: '🚜', description: 'Tractor' },
          { emoji: '🦯', description: 'White Cane' },
          { emoji: '🦽', description: 'Manual Wheelchair' },
          { emoji: '🦼', description: 'Motorized Wheelchair' },
          { emoji: '🛴', description: 'Scooter' },
          { emoji: '🚲', description: 'Bicycle' },
          { emoji: '🛵', description: 'Motor Scooter' },
          { emoji: '🏍', description: 'Motorcycle' },
          { emoji: '🛺', description: 'Auto Rickshaw' },
          { emoji: '🚨', description: 'Police Car Light' },
          { emoji: '🚔', description: 'Oncoming Police Car' },
          { emoji: '🚍', description: 'Oncoming Bus' },
          { emoji: '🚘', description: 'Oncoming Car' },
          { emoji: '🚖', description: 'Oncoming Taxi' },
          { emoji: '🚡', description: 'Aerial Tramway' },
          { emoji: '🚠', description: 'Mountain Cableway' },
          { emoji: '🚟', description: 'Suspension Railway' },
          { emoji: '🚃', description: 'Railway Car' },
          { emoji: '🚋', description: 'Tram Car' },
          { emoji: '🚞', description: 'Mountain Railway' },
          { emoji: '🚝', description: 'Monorail' },
          { emoji: '🚄', description: 'High-Speed Train' },
          { emoji: '🚅', description: 'Bullet Train' },
          { emoji: '🚈', description: 'Light Rail' },
          { emoji: '🚂', description: 'Steam Locomotive' },
          { emoji: '🚆', description: 'Train' },
          { emoji: '🚇', description: 'Metro' },
          { emoji: '🚊', description: 'Tram' },
          { emoji: '🚉', description: 'Station' },
          { emoji: '🛫', description: 'Airplane Departure' },
          { emoji: '🛬', description: 'Airplane Arrival' },
          { emoji: '🛩', description: 'Small Airplane' },
          { emoji: '💺', description: 'Seat' },
          { emoji: '🛰', description: 'Satellite' },
          { emoji: '🚀', description: 'Rocket' },
          { emoji: '🛸', description: 'Flying Saucer' },
          { emoji: '🚁', description: 'Helicopter' },
          { emoji: '🛶', description: 'Canoe' },
          { emoji: '⛵', description: 'Sailboat' },
          { emoji: '🚤', description: 'Speedboat' },
          { emoji: '🛥', description: 'Motor Boat' },
          { emoji: '🛳', description: 'Passenger Ship' },
          { emoji: '🚢', description: 'Ship' },
          { emoji: '⛽', description: 'Fuel Pump' },
          { emoji: '🚧', description: 'Construction' },
          { emoji: '🚦', description: 'Traffic Light' },
          { emoji: '🚥', description: 'Horizontal Traffic Light' },
          { emoji: '🚏', description: 'Bus Stop' },
          { emoji: '🗺', description: 'World Map' },
          { emoji: '🗿', description: 'Moai' },
          { emoji: '🗽', description: 'Statue of Liberty' },
          { emoji: '🗼', description: 'Tokyo Tower' },
          { emoji: '🏰', description: 'Castle' },
          { emoji: '🏯', description: 'Japanese Castle' },
          { emoji: '🏟', description: 'Stadium' },
          { emoji: '🎡', description: 'Ferris Wheel' },
          { emoji: '🎢', description: 'Roller Coaster' },
          { emoji: '🎠', description: 'Carousel Horse' },
          { emoji: '⛲', description: 'Fountain' },
          { emoji: '🏖', description: 'Beach with Umbrella' },
          { emoji: '🏝', description: 'Desert Island' },
          { emoji: '🏜', description: 'Desert' },
          { emoji: '🌋', description: 'Volcano' },
          { emoji: '🏔', description: 'Snow-Capped Mountain' },
          { emoji: '🗻', description: 'Mount Fiji' },
          { emoji: '🏕', description: 'Camping' },
          { emoji: '⛺', description: 'Tent' },
          { emoji: '🏠', description: 'House' },
          { emoji: '🏡', description: 'House with Garden' },
          { emoji: '🏘', description: 'Houses' },
          { emoji: '🏚', description: 'Derelict House' },
          { emoji: '🏗', description: 'Building Construction' },
        ],

        objects: [
          { emoji: '⌚️', description: 'Watch' },
          { emoji: '📱', description: 'Mobile Phone' },
          { emoji: '📲', description: 'Mobile Phone with Arrow' },
          { emoji: '💻', description: 'Laptop' },
          { emoji: '🖥', description: 'Desktop Computer' },
          { emoji: '🖨', description: 'Printer' },
          { emoji: '🖱️', description: 'Computer Mouse' },
          { emoji: '🖲️', description: 'Trackball' },
          { emoji: '🕹️', description: 'Joystick' },
          { emoji: '💿', description: 'Optical Disk' },
          { emoji: '📞', description: 'Telephone Receiver' },
          { emoji: '📷', description: 'Camera' },
          { emoji: '📸', description: 'Camera with Flash' },
          { emoji: '🎛️', description: 'Control Knobs' },
          { emoji: '⏱️', description: 'Stopwatch' },
          { emoji: '⏲️', description: 'Timer Clock' },
          { emoji: '⏰', description: 'Alarm Clock' },
          { emoji: '🕰️', description: 'Mantelpiece Clock' },
          { emoji: '🕯️', description: 'Candle' },
          { emoji: '💡', description: 'Lightbulb' },
          { emoji: '🔦', description: 'Flashlight' },
          { emoji: '🏮', description: 'Red Paper Lantern' },
          { emoji: '🪔', description: 'Diya Lamp' },
          { emoji: '📔', description: 'Notebook with Decorative Cover' },
          { emoji: '📕', description: 'Closed Book' },
          { emoji: '📖', description: 'Open Book' },
          { emoji: '📗', description: 'Green Book' },
          { emoji: '📘', description: 'Blue Book' },
          { emoji: '📙', description: 'Orange Book' },
          { emoji: '📚', description: 'Books' },
          { emoji: '📓', description: 'Notebook' },
          { emoji: '📒', description: 'Ledger' },
          { emoji: '📃', description: 'Page with Curl' },
          { emoji: '📜', description: 'Scroll' },
          { emoji: '📄', description: 'Page Facing Up' },
          { emoji: '📰', description: 'Newspaper' },
          { emoji: '🗞', description: 'Rolled-Up Newspaper' },
          { emoji: '📑', description: 'Bookmark Tabs' },
          { emoji: '🔖', description: 'Bookmark' },
          { emoji: '🏷', description: 'Label' },
          { emoji: '💰', description: 'Money Bag' },
          { emoji: '💴', description: 'Yen Banknote' },
          { emoji: '💵', description: 'Dollar Banknote' },
          { emoji: '💶', description: 'Euro Banknote' },
          { emoji: '💷', description: 'Pound Banknote' },
          { emoji: '💸', description: 'Money with Wings' },
          { emoji: '💳', description: 'Credit Card' },
          { emoji: '🧾', description: 'Receipt' },
          { emoji: '💹', description: 'Chart Increasing with Yen' },
          { emoji: '✉️', description: 'Envelope' },
          { emoji: '📧', description: 'E-Mail' },
          { emoji: '📨', description: 'Incoming Envelope' },
          { emoji: '📩', description: 'Envelope with Arrow' },
          { emoji: '📤', description: 'Outbox Tray' },
          { emoji: '📥', description: 'Inbox Tray'},
          { emoji: '📦', description: 'Package' },
          { emoji: '📫', description: 'Closed Mailbox with Raised Flag' },
          { emoji: '📪', description: 'Closed Mailbox with Lowered Flag' },
          { emoji: '📬', description: 'Open Mailbox with Raised Flag' },
          { emoji: '📭', description: 'Open Mailbox with Lowered Flag' },
          { emoji: '📮', description: 'Postbox' },
          { emoji: '📝', description: 'Memo' },
          { emoji: '💼', description: 'Briefcase' },
          { emoji: '📁', description: 'File Folder' },
          { emoji: '📂', description: 'Open File Folder' },
          { emoji: '🗂', description: 'Card Index Dividers' },
          { emoji: '📅', description: 'Calendar' },
          { emoji: '📆', description: 'Tear-Off Calendar' },
          { emoji: '🗒', description: 'Spiral Notepad' },
          { emoji: '🗓', description: 'Spiral Calendar' },
          { emoji: '📇', description: 'Card Index' },
          { emoji: '📈', description: 'Chart Increasing' },
          { emoji: '📉', description: 'Chart Decreasing' },
          { emoji: '📊', description: 'Bar Chart' },
          { emoji: '📋', description: 'Clipboard' },
          { emoji: '📌', description: 'Pushpin' },
          { emoji: '📍', description: 'Round Pushpin' },
          { emoji: '📎', description: 'Paperclip' },
          { emoji: '🖇', description: 'Linked Paperclips' },
          { emoji: '📏', description: 'Straight Ruler' },
          { emoji: '📐', description: 'Triangular Ruler' },
          { emoji: '✂️', description: 'Scissors' },
          { emoji: '🗃', description: 'Card File Box' },
          { emoji: '🗄', description: 'File Cabinet' },
          { emoji: '🗑', description: 'Wastebasket' },
          { emoji: '🔒', description: 'Locked' },
          { emoji: '🔓', description: 'Unlocked' },
          { emoji: '🔏', description: 'Locked with Pen' },
          { emoji: '🔐', description: 'Locked with Key' },
          { emoji: '🔑', description: 'Key' },
          { emoji: '🗝', description: 'Old Key' },
          { emoji: '🔨', description: 'Hammer' },
          { emoji: '🪓', description: 'Axe' },
          { emoji: '⛏', description: 'Pick' },
          { emoji: '⚒', description: 'Hammer and Pick' },
          { emoji: '🛠', description: 'Hammer and Wrench' },
          { emoji: '🗡', description: 'Dagger' },
          { emoji: '⚔️', description: 'Crossed Swords' },
          { emoji: '🔫', description: 'Water Pistol' },
          { emoji: '🏹', description: 'Bow and Arrow' },
          { emoji: '🛡', description: 'Shield' },
          { emoji: '🪚', description: 'Saw' },
          { emoji: '🔧', description: 'Wrench' },
          { emoji: '🪛', description: 'Screwdriver' },
          { emoji: '🔩', description: 'Nut and Bolt' },
          { emoji: '⚙️', description: 'Gear' },
          { emoji: '🗜', description: 'Clamp' },
          { emoji: '⚖️', description: 'Balance Scale' },
          { emoji: '🦯', description: 'White Cane' },
          { emoji: '🔗', description: 'Link' },
          { emoji: '⛓', description: 'Chains' },
          { emoji: '🪝', description: 'Hook' },
          { emoji: '🧰', description: 'Toolkit' },
          { emoji: '🧲', description: 'Magnet' },
          { emoji: '🪜', description: 'Ladder' },
          { emoji: '⚗️', description: 'Alembic' },
          { emoji: '🧪', description: 'Test Tube' },
          { emoji: '🧫', description: 'Petri Dish' },
          { emoji: '🧬', description: 'DNA' },
          { emoji: '🔬', description: 'Microscope' },
          { emoji: '🔭', description: 'Telescope' },
          { emoji: '📡', description: 'Satellite Antenna' },
          { emoji: '💉', description: 'Syringe' },
          { emoji: '🩸', description: 'Drop of Blood' },
          { emoji: '💊', description: 'Pill' },
          { emoji: '🩹', description: 'Adhesive Bandage' },
          { emoji: '🩺', description: 'Stethoscope' },
          { emoji: '🚪', description: 'Door' },
          { emoji: '🛏', description: 'Bed' },
          { emoji: '🛋', description: 'Couch and Lamp' },
          { emoji: '🪑', description: 'Chair' },
          { emoji: '🚽', description: 'Toilet' },
          { emoji: '🚿', description: 'Shower Head' },
          { emoji: '🛁', description: 'Bathtub' },
          { emoji: '🪒', description: 'Razor' },
          { emoji: '🧴', description: 'Lotion Bottle' },
          { emoji: '🧷', description: 'Safety Pin' },
          { emoji: '🧹', description: 'Broom' },
          { emoji: '🧺', description: 'Basket' },
          { emoji: '🧻', description: 'Roll of Toiletpaper' },
          { emoji: '🪣', description: 'Bucket' },
          { emoji: '🧼', description: 'Soap' },
          { emoji: '🪥', description: 'Toothbrush' },
          { emoji: '🧽', description: 'Sponge' },
          { emoji: '🧯', description: 'Fire Extinguisher' },
          { emoji: '🛒', description: 'Shopping Cart' },
          { emoji: '🚬', description: 'Cigarette' },
        ],

        hearts: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝'],
        symbols: [
          '🔟','🔢','🔣','🔠','🔡','🔤','🅰️',
          '🆎','🅱️','🆑','🆒','🆓','ℹ️','🆔',
          'Ⓜ️','🆕','🆖','🅾️','🆗','🅿️','🆘',
          '🆙','🆚','🈁','🈂️','🈷️','🈶','🈯',
          '🉐','🈹','🈚','🈲','🉑','🈸','🈴',
          '🈳','㊗️','㊙️','🈺','🈵','🔴','🟠',
          '🟡','🟢','🔵','🟣','🟤','⚫','⚪',
          '🟥','🟧','🟨','🟩','🟦','🟪','🟫',
          '⬛','⬜','🔶','🔷','🔸','🔹','🔺','🔻',
          '💠','🔘','🔳','🔲'
        ],
        flags: [
          '🏁','🚩','🎌','🏴','🏳️','🏳️‍🌈','🏴‍☠️',
          '🇦🇨','🇦🇩','🇦🇪','🇦🇫','🇦🇬','🇦🇮','🇦🇱',
          '🇦🇲','🇦🇴','🇦🇶','🇦🇷','🇦🇸','🇦🇹','🇦🇺',
          '🇦🇼','🇦🇽','🇦🇿','🇧🇦','🇧🇧','🇧🇩','🇧🇪',
          '🇧🇫','🇧🇬','🇧🇭','🇧🇮','🇧🇯','🇧🇱','🇧🇲',
          '🇧🇳','🇧🇴','🇧🇶','🇧🇷','🇧🇸','🇧🇹','🇧🇻',
          '🇧🇼','🇧🇾','🇧🇿','🇨🇦','🇨🇨','🇨🇩','🇨🇫',
          '🇨🇬','🇨🇭','🇨🇮','🇨🇰','🇨🇱','🇨🇲','🇨🇳',
          '🇨🇴','🇨🇵','🇨🇷','🇨🇺','🇨🇻','🇨🇼','🇨🇽',
          '🇨🇾','🇨🇿','🇩🇪','🇩🇬','🇩🇯','🇩🇰','🇩🇲',
          '🇩🇴','🇩🇿','🇪🇦','🇪🇨','🇪🇪','🇪🇬','🇪🇭',
          '🇪🇷','🇪🇸','🇪🇹','🇪🇺','🇫🇮','🇫🇯','🇫🇰',
          '🇫🇲','🇫🇴','🇫🇷','🇬🇦','🇬🇧','🇬🇩','🇬🇪',
          '🇬🇫','🇬🇬','🇬🇭','🇬🇮','🇬🇱','🇬🇲','🇬🇳',
          '🇬🇵','🇬🇶','🇬🇷','🇬🇸','🇬🇹','🇬🇺','🇬🇼',
          '🇬🇾','🇭🇰','🇭🇲','🇭🇳','🇭🇷','🇭🇹','🇭🇺',
          '🇮🇨','🇮🇩','🇮🇪','🇮🇱','🇮🇲','🇮🇳','🇮🇴',
          '🇮🇶','🇮🇷','🇮🇸','🇮🇹','🇯🇪','🇯🇲','🇯🇴',
          '🇯🇵','🇰🇪','🇰🇬','🇰🇭','🇰🇮','🇰🇲','🇰🇳',
          '🇰🇵','🇰🇷','🇰🇼','🇰🇾','🇰🇿','🇱🇦','🇱🇧',
          '🇱🇨','🇱🇮','🇱🇰','🇱🇷','🇱🇸','🇱🇹','🇱🇺',
          '🇱🇻','🇱🇾','🇲🇦','🇲🇨','🇲🇩','🇲🇪','🇲🇫',
          '🇲🇬','🇲🇭','🇲🇰','🇲🇱','🇲🇲','🇲🇳','🇲🇴',
          '🇲🇵','🇲🇶','🇲🇷','🇲🇸','🇲🇹','🇲🇺','🇲🇻',
          '🇲🇼','🇲🇽','🇲🇾','🇲🇿','🇳🇦','🇳🇨','🇳🇪',
          '🇳🇫','🇳🇬','🇳🇮','🇳🇱','🇳🇴','🇳🇵','🇳🇷',
          '🇳🇺','🇳🇿','🇴🇲','🇵🇦','🇵🇪','🇵🇫','🇵🇬',
          '🇵🇭','🇵🇰','🇵🇱','🇵🇲','🇵🇳','🇵🇷','🇵🇸',
          '🇵🇹','🇵🇼','🇵🇾','🇶🇦','🇷🇪','🇷🇴','🇷🇸',
          '🇷🇺','🇷🇼','🇸🇦','🇸🇧','🇸🇨','🇸🇩','🇸🇪',
          '🇸🇬','🇸🇭','🇸🇮','🇸🇯','🇸🇰','🇸🇱','🇸🇲',
          '🇸🇳','🇸🇴','🇸🇷','🇸🇸','🇸🇹','🇸🇻','🇸🇽',
          '🇸🇾','🇸🇿','🇹🇦','🇹🇨','🇹🇩','🇹🇫','🇹🇬',
          '🇹🇭','🇹🇯','🇹🇰','🇹🇱','🇹🇲','🇹🇳','🇹🇴',
          '🇹🇷','🇹🇹','🇹🇻','🇹🇼','🇹🇿','🇺🇦','🇺🇬',
          '🇺🇲','🇺🇳','🇺🇸','🇺🇾','🇺🇿','🇻🇦','🇻🇨',
          '🇻🇪','🇻🇬','🇻🇮','🇻🇳','🇻🇺','🇼🇫','🇼🇸',
          '🇽🇰','🇾🇪','🇾🇹','🇿🇦','🇿🇲','🇿🇼','🏴‍☠️',
          '🏴󠁧󠁢󠁥󠁮󠁧󠁿','🏴󠁧󠁢󠁳󠁣󠁴󠁿','🏴󠁧󠁢󠁷󠁬󠁳󠁿',
        ]
      };

      return emojiCategories;
}