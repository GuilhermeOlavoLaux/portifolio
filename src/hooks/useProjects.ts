import Netflix from '@assets/images/netflix.png';
import Weather from '@assets/images/weather.png';
import Trello from '@assets/images/trello.png';
import HashGame from '@assets/images/hash_game.png';

export interface ProjectsCardPropsTypes {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  description: string;
}

export default function useProjectsCard(): Array<ProjectsCardPropsTypes> {
  const projectsCards = [
    {
      id: 1,
      title: 'Clone da Netflix',
      image: Netflix,
      imageAlt: 'Logo do serviço de streaming Netflix.',
      description:
        'Clone da Netflix, desenvolvido utilizando ReactJs, TypeScript e Apis públicas de livre acesso.',
    },
    {
      id: 2,
      title: 'Previsão do clima na Terra',
      image: Weather,
      imageAlt: 'Dois termômetros, um apontando calor e o outro frio.',
      description:
        'Projeto que permite o usuário consultar a previsão do tempo de qualquer lugar do planeta. Desenvolvido com ReactJs e TypeScript.',
    },
    {
      id: 3,
      title: 'Clone do Trello',
      image: Trello,
      imageAlt: 'Logo do Trello',
      description:
        'Projeto de tarefas, semelhanter ao Trello. Desenvolvido com ReactJs, TypeScript e uma Api de acesso livre.',
    },
    {
      id: 4,
      title: 'Jogo da Velha',
      image: HashGame,
      imageAlt: 'Jogo da velha',
      description: 'Jogo da velha, desenvolvido com ReactJs e TypeScript.',
    },
  ];
  return projectsCards;
}
