import { useState } from "react";

function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const handleName = (event) => {
    setName(event.target.value)
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleMessage = (event) => {
    setMessage(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Seu nome: ${name}`)
    console.log(`Seu email: ${email}`)
    console.log(`Sua mensagem: ${message}`)
    alert(`Sua mensagem foi enviada com sucesso. Obrigado ${name}!`)
  }
    return ( 
        <div className="container px-4 mx-auto min-h-screen flex justify-center items-center">
        <div className="mx-auto my-4">
          <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contato
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="name">
                  Seu nome
                </label>
                <input
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  placeholder="Enter your name"
                  type="text"
                  value={name}
                  onChange={handleName}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="email">
                  Seu Email
                </label>
                <input
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="message">
                    Sua Mensagem
                </label>
                <textarea
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  rows={4}
                  placeholder="Enter your message"
                  name="message"
                  id="message"
                  value={message}
                  onChange={handleMessage}
                />
              </div>
              <button
                className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                type="submit"
                onClick={handleSubmit}
              >
                Confirmar
              </button>
            </form>
          </div>
        </div>
      </div>
     );
}

export default Contact;