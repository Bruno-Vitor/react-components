import "./styles.css";
import Header from "./components/Header";
import Section from "./components/Section";

export default function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar!"
        />
        <Section
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não perco!"
        />
      </main>
    </div>
  );
}
