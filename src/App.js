import "./styles.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gamesListData = [
  {
    url: "https://www.twitch.tv/battlefield",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/c59cdfb4-50d2-4788-b860-c8e42e376b76-profile_image-70x70.png",
    alt: "Imagem do jogo Battlefield"
  },
  {
    url: "https://www.twitch.tv/battlefield",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/c59cdfb4-50d2-4788-b860-c8e42e376b76-profile_image-70x70.png",
    alt: "Imagem do jogo Battlefield"
  },
  {
    url: "https://www.twitch.tv/battlefield",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/c59cdfb4-50d2-4788-b860-c8e42e376b76-profile_image-70x70.png",
    alt: "Imagem do jogo Battlefield"
  },
  {
    url: "https://www.twitch.tv/battlefield",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/c59cdfb4-50d2-4788-b860-c8e42e376b76-profile_image-70x70.png",
    alt: "Imagem do jogo Battlefield"
  }
];

const channelListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito"
  },
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito"
  },
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagemd de Mayk Brito"
  }
];

const socialListData = [
  {
    url: "https://twitch.com/maykbrito",
    imageUrl: "/assets/twitch.svg",
    alt: "twitch do Mayk Brito"
  },
  {
    url: "https://instagram.com/maykbrito",
    imageUrl: "/assets/instagram.svg",
    alt: "instagram do Mayk Brito"
  },
  {
    url: "https://twitter.com/maykbrito",
    imageUrl: "/assets/twitter.svg",
    alt: "twitter do Mayk Brito"
  },
  {
    url: "https://youtube.com/maykbrito",
    imageUrl: "/assets/youtube.svg",
    alt: "youtube do Mayk Brito"
  }
];

export default function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {gamesListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          className="channel-list"
        >
          {channelListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
