import ResponsiveDesignImage from '@assets/images/responsive-design.png';
import ResponsiveDesignImage2 from '@assets/images/teste.png';
import Lighthouse from '@assets/images/lighthouse.png';

export interface SkillCardPropsTypes {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  description: string;
}

export default function useSkillCards(): Array<SkillCardPropsTypes> {
  const skillCards = [
    {
      id: 1,
      title: 'Design Responsivo',
      image: ResponsiveDesignImage,
      imageAlt:
        'Imagem demonstrando a responsividade de um site em dispositivos com diferentes tamanhos de tela.',
      description:
        'Desenvolvo sites totalmente responsivos, onde qualquer dispositivo conseguirá renderizar o conteúdo na tela.',
    },
    {
      id: 2,
      title: 'Acessibilidade',
      image: ResponsiveDesignImage2,
      imageAlt:
        'Imagem de um notebook demonstrando deficiências e possíveis dificuldades que usuários podem ter ao acessar uma página web.',
      description:
        'A acessibilidade na web é um tema muito importante, sempre desenvolvo utilizando as melhores práticas para tornar os sites acessíveis para qualquer pessoa, sendo ela deficiente ou não.',
    },
    {
      id: 3,
      title: 'Performance',
      image: Lighthouse,
      imageAlt:
        'Imagem de um notebook demonstrando deficiências e possíveis dificuldades que usuários podem ter ao acessar uma página web.',
      description:
        'Todo o cuidado para desenvolver com as tecnologias mais avançadas para que seu site carregue ao piscar os olhos.',
    },
  ];
  return skillCards;
}
