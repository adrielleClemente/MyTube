import config from "../config.json";
import styled from "styled-components";

function HomePage() {

    const estilosDaHomePage = { backgroundColor: "brown" };

    console.log(config.playlists);

    return (
        <div style={estilosDaHomePage}>

            <Menu />
            <Header />
            <Timeline playlists={config.playlists} />
        </div>

    )
}

export default HomePage

function Menu() {
    return (
        <div>
            Menu
        </div>
    )
}

const StyledHeader = styled.div`
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }

        .user-info {
            margin-top: 50px;
            display: flex;
            align-items: center;
            width: 100%;
            padding: 16px 32px;
            gap: 16px;
        }
    `;

function Header() {

    return (
        <StyledHeader>

            {/* <img src="banner"/> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />

                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )


}

function Timeline(props) {
    console.log("monstando", props.playlists);

    const playlistNames = Object.keys(props.playlists)
    return (
        <div>
            {playlistNames.map((playlistName) => {

                const videos = props.playlists[playlistName];
                console.log(videos)

                return (
                    <section>
                        <h2> {playlistName} </h2>

                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )

            })}
        </div>
    )
}