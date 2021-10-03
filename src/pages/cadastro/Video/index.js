import React from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    title: 'Video padrão',
    link: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    category: 'Front End',
  });

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        videosRepository.create({
          title: values.title,
          link: values.link,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="LINK"
          name="link"
          value={values.link}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <br />
      <br />
    </PageDefault>
  );
}

export default CadastroVideo;
