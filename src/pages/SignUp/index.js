import './style.css';
import Close from '../../assets/close-eye.svg'
import Open from '../../assets/open-eye.svg'
import { useState } from 'react';
import Mulher from '../../assets/woman-success.png'
import Background from '../../assets/background.jpg'

function SignUp() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: ''
  })
  const [exibir, setExibir] = useState(false)
  const [img, setImg] = useState(Open)
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState('')
  const [imgSucesso, setImgSucesso] = useState('')

  function changeForm(e) {
    const value = e.target.value
    setForm({ ...form, [e.target.name]: value })
  }

  function exibirSenha(valor) {
    valor ? setImg(Close) : setImg(Open)
    setExibir(valor)
  }

  function apagarInformacoes(){
    setForm({ ...form, nome:'', email:'', senha:'' })
  }


  function dadosSubmit(e) {
    setErro('')
    e.preventDefault()
    if (!form.email || !form.senha || !form.nome) {
      if (!form.nome) return setErro('Digite seu nome')
      if (!form.email) return setErro('Digite seu email');
      if (!form.senha) return setErro('Digite sua senha');
    }
    document.querySelector('form').classList.add('hidden')
    setImgSucesso(Mulher)
    setSucesso('Cadastro efetuado com sucesso!')
  }

  return (
    <div className='flex'>
      <div className='formDiv'>
        <form onSubmit={dadosSubmit}>
        <h1>Cadastre-se</h1>
          <input
            className='nome'
            type='nome'
            name='nome'
            placeholder='Nome'
            value={form.nome}
            onChange={(e) => changeForm(e)}
          />
          <input
            className='email'
            type='email'
            name='email'
            placeholder='E-mail'
            value={form.email}
            onChange={(e) => changeForm(e)}
          />
          <div className='senhaSite'>
            <input
              type={exibir ? 'text' : 'password'}
              name='senha'
              placeholder='Senha'
              value={form.senha}
              onChange={(e) => changeForm(e)}
            />
            <img
              className='olho'
              value={exibir}
              src={img}
              onClick={() => exibirSenha(!exibir)}
            />
          </div>
          <span className='erro'>{erro}</span>
          <button className='btn-cadastro' type='submit'>Cadastrar</button>
          <button className='btn-cancelar'onClick={()=>apagarInformacoes()} type='button'>Cancelar</button>
          <p>Já tem um cadastro? Clique aqui</p>
        </form>
        <div className='card-Sucesso'>
          <img className='imgSucesso' src={imgSucesso} />
          <span>{sucesso}</span>
        </div>
      </div>
      <div>
        <img src={Background} />
      </div>
    </div>
  );
}

export default SignUp;
