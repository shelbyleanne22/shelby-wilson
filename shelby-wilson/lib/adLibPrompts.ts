
const prompts = ['Adjective', 'Noun', 'Verb', 'Color', 'Animal'];
const template =
    'Once upon a time, there was a very {0} {1} who loved to {2} in a {3} suit with their pet {4}.';

export const adLibPrompts = [
    {
        title: "A Journey to Remember",
        prompts: ['Silly Name', 'Adjective', 'Vehicle', 'Snack', 'Celebrity', 'Disgusting Substance', 'Emotion', 'Body Part', 'Place'],
        template: 'One day, {0}, a {1} explorer, set out on a journey across the world in their trusty {2}.' + 
        'Their mission? To find the last remaining {3} rumored to have been eaten by {4} during a midnight' + 
        ' snack raid. The journey took them through rivers of {5}, a desert of burning {6}, and a mountain' + 
        ' shaped like a giant {7}. At long last, they arrived at the sacred {8}, only to realize they’d left' + 
        ' the oven on at home. The sandwich remains lost to this day.'
    }
];
