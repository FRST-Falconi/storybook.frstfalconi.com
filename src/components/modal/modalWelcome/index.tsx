import React, { useEffect, useState } from "react";

import { ContainerModalBoasVindas } from "./styles";
import Modal from "../../DS/modal";
interface ModalBoasVindasProps {
  isOpen: boolean;
  onClose: () => void;
  suppMaterials: any;
}

const ModalBoasVindas = (props: ModalBoasVindasProps) => {
  const [isOpenModalBoasVindas, setIsOpenModalBoasVindas] = useState(false);

  useEffect(() => {
    setIsOpenModalBoasVindas(props.isOpen);
  }, [props.isOpen]);

  function handleStepText(step) {
    switch (step) {
      case 1:
        return (
          <div>
            <h1>Boas-vindas à fase 1!</h1>
            <p>Para concluir essa fase você precisará:</p>
            <ul>
              <li>
                Escolher um desafio que você ainda não saiba como solucionar;
              </li>
              <li>Definir qual o seu objetivo com este desafio;</li>
              <li>
                Escolher um indicador para mensurar o cenário atual e o
                resultado alcançado;
              </li>
              <li>Refletir sobre o que você já sabe acerca do desafio;</li>
              <li>
                Refletir sobre o que você ainda não sabe, ou precisa descobrir.
              </li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div>
            <h1>Boas-vindas à fase 2!</h1>
            <p>Para concluir essa fase você precisará:</p>
            <ul>
              <li>Definir Causas;</li>
              <li>
              Definir hipóteses;
              </li>
              <li>
              Criar pelo menos uma ação para a sua hipótese priorizada.
              </li>
            </ul>
            <p><strong>Dica: </strong>Acesse nosso material de apoio com mais informações.</p>
          </div>
        );
      case 3:
        return (
          <div>
            <h1>Boas-vindas à fase 3!</h1>
            <p>Para concluir essa fase você precisará:</p>
            <ul>
              <li>
                Preencher quais testes foram feitos para suas ações
              </li>
              <li>Definir o status das suas ações</li>
              <li>
                Definir o nível de sucesso para cada uma de suas ações
              </li>
              <li>Adicionar novas ações que não foram levantadas na fase anterior, mas que foram executadas.</li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div>
            <h1>Boas-vindas à fase 4!</h1>
            <p>Para concluir essa fase você precisará:</p>
            <ul>
              <li>
                Definir se alcançou seu objetivo principal
              </li>
              <li>Mostrar seus resultados ou seus aprendizados com o desafio</li>
              <li>
                Mostrar se obteve algum resultado ou aprendizado relacionado a alguma outra hipotese que não foi priorizada
              </li>
            </ul>
          </div>
        );
      case 5:
        return (
          <div>
            <h1>Boas-vindas à fase 5!</h1>
            <p>Para concluir essa fase você precisará:</p>
            <ul>
              <li>
                Definir quais são os próximos passos do seu desafio
              </li>
            </ul>
          </div>
        );
      default:
        return (
          <div>
            <h1>Boas-vindas à fase 1!</h1>
            <p>Para concluir essa fase você precisará:</p>
            <ul>
              <li>
                Escolher um desafio que você ainda não saiba como solucionar;
              </li>
              <li>Definir qual o seu objetivo com este desafio;</li>
              <li>
                Escolher um indicador para mensurar o cenário atual e o
                resultado alcançado;
              </li>
              <li>Refletir sobre o que você já sabe acerca do desafio;</li>
              <li>
                Refletir sobre o que você ainda não sabe, ou precisa descobrir.
              </li>
            </ul>
          </div>
        );
    }
  }

  function handleModalBoasVindas() {
    return (
      <ContainerModalBoasVindas>
        <img
          src={
            props.suppMaterials[0]?.cover_img
              ? props.suppMaterials[0]?.cover_img
              : "https://lxp-cdn.frstfalconi.cloud/FORMS/boasVindasModal2.png"
          }
          alt="imgModalBoasVindas"
        />
        {props.suppMaterials[0]?.step ? (
          handleStepText(props.suppMaterials[0]?.step)
        ) : (
          <div>
            <h1>Boas-vindas à fase 1!</h1>
            <p>Para concluir essa fase você precisará:</p>
            <ul>
              <li>
                Escolher um desafio que você ainda não saiba como solucionar;
              </li>
              <li>Definir qual o seu objetivo com este desafio;</li>
              <li>
                Escolher um indicador para mensurar o cenário atual e o
                resultado alcançado;
              </li>
              <li>Refletir sobre o que você já sabe acerca do desafio;</li>
              <li>
                Refletir sobre o que você ainda não sabe, ou precisa descobrir.
              </li>
            </ul>
          </div>
        )}
      </ContainerModalBoasVindas>
    );
  }

  function handleClose() {
    props.onClose();
    setIsOpenModalBoasVindas(false);
  }

  return (
    <>
      <Modal
        open={isOpenModalBoasVindas}
        onClose={handleClose}
        onOpen={() => setIsOpenModalBoasVindas(true)}
        animation={"BlowUp"}
        handleCloseOnIcon={handleClose}
        showCloseButton={true}
        style={{
          width: "100%",
          maxWidth: "fit-content",
          background: "#FFF9D7",
        }}
      >
        {handleModalBoasVindas()}
      </Modal>
    </>
  );
};

export default ModalBoasVindas;
