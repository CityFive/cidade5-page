export interface SocialInfo {
  instagramUrl?: string;
  youtubeUrl?: string;
  spotifyUrl?: string;
  spotifyPlaylist?: string;
  twitterUrl?: string;
}

export interface Pastor {
  imageUrl: string;
  fullName: string;
  title: string;
  description: string;
  social: SocialInfo;
}

export const data = {
  instagramPosts: [
    "/images/gallery1.jpeg",
    "/images/gallery2.jpeg",
    "/images/gallery3.jpeg",
    "/images/gallery4.jpeg",
    "/images/gallery5.jpeg",
    "/images/gallery6.jpeg",
    "/images/gallery7.jpeg",
    "/images/gallery8.jpeg",
    "/images/gallery9.jpeg",
  ],
  social: {
    instagramUrl: "https://www.instagram.com/cidade.cinco",
    youtubeUrl: "https://www.youtube.com/channel/UCA5eDWACcuOepN3zPH8mx9A",
    spotifyUrl:
      "https://open.spotify.com/playlist/213Odn5L2T4OpwW3PSoWqv?si=13ff6d6f9746409b",
    spotifyPlaylist:
      "https://open.spotify.com/playlist/213Odn5L2T4OpwW3PSoWqv?si=13ff6d6f9746409b",
  } as SocialInfo,
  blog: {
    authors: [],
    posts: [],
  },
  media: {
    photosGallery: [],
  },
  churchInfo: {
    pastors: [
      {
        imageUrl: "/images/fabio.png",
        fullName: "Fabio Leal",
        title: "Seminarista e pastor",
        description:
          "é casado com a Anielle, pai do Martin e mora em São Paulo há seis anos. Está no último ano do Seminário Martin Bucer e atua na plantação de igreja há quase 10 anos. Em São Paulo, é pastor titular da Igreja Cidade Cinco.",
        social: {
          instagramUrl: "https://www.instagram.com/pastorfabinho/",
          twitterUrl: "https://twitter.com/pastorfabioleal",
          youtubeUrl:
            "https://www.youtube.com/channel/UCA5eDWACcuOepN3zPH8mx9A",
        },
      },
      {
        imageUrl: "/images/matheus.png",
        fullName: "Matheus Odilon",
        title: "Seminarista",
        description:
          "é casado com a Barbara e pai da Amélia. Estuda teologia reformada no Seminário Martin Bucer e trabalha como desenvolvedor de software. Em São Paulo, é um dos homens responsáveis pela pregação bíblica e cooperador pastoral da Igreja Cidade Cinco.",
        social: {
          instagramUrl: "https://www.instagram.com/mtsodilon/",
          twitterUrl: "https://twitter.com/mtsodilon",
        },
      },
      {
        imageUrl: "/images/sergio.png",
        fullName: "Sérgio Sousa",
        title: "Seminarista",
        description:
          "é casado com a Camilla e pai da Antonella. Estuda teologia reformada no Seminário Martin Bucer e trabalha como empreendedor. Em São Paulo, é um dos homens responsáveis pela administração e um cooperador pastoral da Igreja Cidade Cinco.",
        social: {
          instagramUrl: "https://www.instagram.com/sergiogns/",
          twitterUrl: "https://twitter.com/sergiogns",
        },
      },
    ] as Pastor[],
    offerPix: "42.771.926/0001-20",
    contact: "",
    address: {},
    service: {
      hour: "10:30",
      day: "domingo",
      where: "teatro Santo Agostinho",
    },
  },
};