import { Link } from 'components';

export default Home;

function Home() {
    return (
        <div>
            <h1>Bem-vindo(a) ao EstacionamentON!</h1>
            <p>Aqui você pode gerenciar o estacionamento de sua empresa de forma dinâmica!</p>
            <p><Link href="/users">&gt;&gt; Gerenciar Estacionamento</Link></p>
        </div>
    );
}
