const products = [
    {
      id: 1,
      price: 100,
      image: 'https://th.bing.com/th/id/OIP.ffxGsTgTSN6gU49gF-o4HAHaHa?w=201&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand A',
      delivery: 'free delivery',qty:1
    },
    {
      id: 2,
      price: 150,
      image: 'https://th.bing.com/th/id/OIP.gW88uqmGDNW6mAzyKZqT9QAAAA?w=474&h=682&rs=1&pid=ImgDetMain',
      brand: 'Brand B',
      delivery: 'free delivery',qty:1
    },
    {
      id: 3,
      price: 200,
      image: 'https://th.bing.com/th/id/OIP.YCPGz9YydOkR0oBSmjx3yAHaL8?w=115&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand C',
      delivery: 'free delivery',qty:1
    },
    {
      id: 4,
      price: 250,
      image: 'https://th.bing.com/th/id/OIP.jbtMCdv4nVc2ei9-BeGw5QAAAA?w=115&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand D',
      delivery: 'free delivery',qty:1
    },
    {
      id: 5,
      price: 300,
      image: 'https://th.bing.com/th/id/OIP.TQCMcv6uSyJ2_TkpzlGJtQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand E',
      delivery: 'free delivery',qty:1
    },
    {
      id: 6,
      price: 350,
      image: 'https://th.bing.com/th/id/OIP.Eyqmr-eFoeSAMC9aFuIv5QHaKG?w=145&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand F',
      delivery: 'free delivery',qty:1
    },
    {
      id: 7,
      price: 400,
      image: 'https://th.bing.com/th/id/OIP.2UlkTLi8RxUPM0eiD4zUdAHaHa?w=224&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand G',
      delivery: 'free delivery',qty:1
    },
    {
      id: 8,
      price: 450,
      image: 'https://th.bing.com/th/id/OIP.c_ragGmx8ZbuyOeLDV6QrQHaLH?w=125&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand H',
      delivery: 'free delivery',qty:1
    },
    {
      id: 9,
      price: 500,
      image: 'https://th.bing.com/th/id/OIP.cSYET2weeV87rF-lOeAeWQHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand I',
      delivery: 'free delivery',qty:1
    },
    {
      id: 10,
      price: 550,
      image: 'https://th.bing.com/th/id/OIP.ZVmveyH2PNpaJiT5EN22kQHaHd?w=217&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand J',
      delivery: 'free delivery',qty:1
    },
    {
      id: 11,
      price: 600,
      image: 'https://th.bing.com/th/id/OIP.5-irJe-t1qJGejWPzSni3AHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand K',
      delivery: 'free delivery',qty:1
    },
    {
      id: 12,
      price: 650,
      image: 'https://th.bing.com/th/id/OIP.JJekNAlgztvr_5uZDM938gHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand L',
      delivery: 'free delivery',qty:1
    },
    {
      id: 13,
      price: 700,
      image: 'https://th.bing.com/th/id/OIP.iApZh73hAHRjN8DEqrIzdgHaL8?w=132&h=214&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand M',
      delivery: 'free delivery',qty:1
    },
    {
      id: 14,
      price: 750,
      image: 'https://th.bing.com/th/id/OIP.t-cvN4mqoKLWerwXEItxyQHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand N',
      delivery: 'free delivery',qty:1
    },
    {
      id: 15,
      price: 800,
      image: 'https://th.bing.com/th/id/OIP.QdgTiqS7xRxLhE6dBMF2BgAAAA?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand O',
      delivery: 'free delivery',qty:1
    },
    {
      id: 16,
      price: 850,
      image: 'https://th.bing.com/th/id/OIP.5UUxpbFYqZDb-o5lk2LjzwHaNK?w=121&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand P',
      delivery: 'free delivery',qty:1
    },
    {
      id: 17,
      price: 900,
      image: 'https://th.bing.com/th/id/OIP.06VP8gJm1nsSVHdG4y8I0wHaJ4?w=160&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand Q',
      delivery: 'free delivery',qty:1
    },
    {
      id: 18,
      price: 950,
      image: 'https://th.bing.com/th/id/OIP.ejY-gr2qd1-LNhuyZhI5pgHaK-?w=131&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand R',
      delivery: 'free delivery',qty:1
    },
    {
      id: 19,
      price: 1000,
      image: 'https://th.bing.com/th/id/OIP.lqrlA-z9vYmPu5xp7x5HJAHaHa?w=189&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand S',
      delivery: 'free delivery',qty:1
    },
    {
      id: 20,
      price: 1050,
      image: 'https://th.bing.com/th/id/OIP.lqrlA-z9vYmPu5xp7x5HJAHaHa?w=189&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand T',
      delivery: 'free delivery',qty:1
    },
    {
      id: 21,
      price: 1100,
      image: 'https://th.bing.com/th/id/OIP.taFxI-_lheUWCwkd-ozEMAHaHa?w=201&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand U',
      delivery: 'free delivery',qty:1
    },
    {
      id: 22,
      price: 1150,
      image: 'https://th.bing.com/th/id/OIP.qnj4Zhmfhq-NT6L05MbFDwAAAA?w=195&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand V',
      delivery: 'free delivery',qty:1
    },
    {
      id: 23,
      price: 1200,
      image: 'https://th.bing.com/th/id/OIP.qnj4Zhmfhq-NT6L05MbFDwAAAA?w=195&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand W',
      delivery: 'free delivery',qty:1
    },
    {
      id: 24,
      price: 1250,
      image: 'https://th.bing.com/th/id/OIP.SjgamL6er31UyuxD9JkXXAHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand X',
      delivery: 'free delivery',qty:1
    },
    {
      id: 25,
      price: 1300,
      image: 'https://th.bing.com/th/id/OIP.5UUxpbFYqZDb-o5lk2LjzwHaNK?w=121&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      brand: 'Brand Y',
      delivery: 'free delivery',qty:1
    }
  ];
  
export default products