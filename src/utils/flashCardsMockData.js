const FLASH_CARDS_MOCK_DATA = [
    {
        uuid: 1,
        flashcardName: 'UAT',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 2,
        flashcardName: 'blockchain',
        meaning: 'Distributed database or ledger that is shared among the nodes of computer network',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 3,
        flashcardName: 'Nginx',
        meaning: 'Open source software, async framework web server, reverse proxy, http cache, load balancer',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 4,
        flashcardName: 'Docker',
        meaning: 'Make web application / service as Encapsulation or container, allow faster build, deploy, testing',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 5,
        flashcardName: 'Load Balancer',
        meaning: 'Allocate the server request loading, avoid over-loading on single server, resoource-optimization',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 6,
        flashcardName: 'Encapsulation',
        meaning: 'Make packaging, avoid sensitive information to be leaked',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 7,
        flashcardName: 'Proxy',
        meaning: 'Firewall element, allow outside to read/write data to inside, and it can be a cache data buffer, without requesting the root data source oftenly',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 8,
        flashcardName: 'AWS',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 9,
        flashcardName: 'Git',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 10,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 11,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 12,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 13,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 14,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 15,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 16,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 17,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 18,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 19,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 20,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 21,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 22,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 23,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 24,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 25,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 26,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 27,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 28,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 29,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 30,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 31,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 32,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 33,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 34,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 35,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 36,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 37,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 38,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 39,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 40,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 41,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 42,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 43,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 44,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 46,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 47,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 48,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 49,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned']
    },
    {
        uuid: 50,
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned']
    },
    {
        uuid: 51,
        flashcardName: 'Flutter51',
        meaning: 'Use Acceptance Test',
        tag: ['Learned']
    },
]

export {
    FLASH_CARDS_MOCK_DATA
}