import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon,} from '@phosphor-icons/react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Footer() {
  const data = new Date().getFullYear();

  const {usuario} = useContext(AuthContext)

  return (
    <>
      <div className="flex justify-center bg-pink-300 text-black">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Diário de uma mãe em dobro | Desde: {data}
          </p>
          <p className="text-lg">Feito com 💗 por Adrielli Bertoldo</p>
          {usuario.token !== '' ? (
            <div className="flex gap-2">
            <LinkedinLogoIcon size={48} weight="bold" />
            <InstagramLogoIcon size={48} weight="bold" />
            <FacebookLogoIcon size={48} weight="bold" />
          </div>
          ) : <><p>Ajuda a mãe aqui, faz esse login 😎</p></>}
        </div>
      </div>
    </>
  );
}

export default Footer;