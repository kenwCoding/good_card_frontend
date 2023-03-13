const FLASH_CARDS_MOCK_DATA = [
    {
        uuid: 1,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'UAT',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 2,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'blockchain',
        meaning: 'Distributed database or ledger that is shared among the nodes of computer network',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 3,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Nginx',
        meaning: 'Open source software, async framework web server, reverse proxy, http cache, load balancer',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 4,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Docker',
        meaning: 'Make web application / service as Encapsulation or container, allow faster build, deploy, testing',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 5,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Load Balancer',
        meaning: 'Allocate the server request loading, avoid over-loading on single server, resoource-optimization',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 6,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Encapsulation',
        meaning: 'Make packaging, avoid sensitive information to be leaked',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 7,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Proxy',
        meaning: 'Firewall element, allow outside to read/write data to inside, and it can be a cache data buffer, without requesting the root data source oftenly',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 8,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'AWS',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 9,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Git',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 10,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 11,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 12,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 13,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 14,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 15,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 16,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 17,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 18,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 19,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 20,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 21,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 22,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 23,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 24,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 25,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 26,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 27,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 28,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 29,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 30,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 31,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 32,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 33,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 34,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 35,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 36,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 37,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 38,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 39,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 40,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 41,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 42,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 43,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 44,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 46,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 47,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 48,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned', 'Starred']
    },
    {
        uuid: 49,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned']
    },
    {
        uuid: 50,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter',
        meaning: 'Use Acceptance Test',
        tag: ['Learned']
    },
    {
        uuid: 51,
        cardSet: ['Software Engineer Set'],
        flashcardName: 'Flutter51',
        meaning: 'Use Acceptance Test',
        tag: ['Learned']
    },
]

export {
    FLASH_CARDS_MOCK_DATA
}