/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import PageDefault from '../../components/PageDefault';
import VideoList from '../../components/VideoList';
import videosRepository from '../../repositories/videos';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    videosRepository.getAll()
      .then((listaVideos) => {
        setDadosIniciais(listaVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((video, indice) => {
        if (indice === 0) {
          return (
            <div key={video.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].title}
                link={dadosIniciais[0].link}
                videoDescription={dadosIniciais[0].description}
              />
            </div>
          );
        }

        return (
          <VideoList
            key={video.id}
            link={video.link}
            videoTitle={video.title}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
