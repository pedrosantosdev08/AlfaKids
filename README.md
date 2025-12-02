📚 App de Alfabetização – Aprender é Divertido! ✨

Um aplicativo desenvolvido com React Native + Expo para auxiliar crianças na alfabetização na idade correta, através de atividades lúdicas e interativas: montagem de palavras, sílabas, histórias e acompanhamento de progresso.

🧩 Sobre o Projeto

O objetivo do app é apoiar o processo de leitura de forma leve e divertida, utilizando elementos visuais e interações simples, acessíveis para crianças em fase de alfabetização.

Com este app, a criança pode:

Aprender sílabas de forma intuitiva 🔤

Montar palavras arrastando ou tocando nas letras 🎯

Ler pequenas historinhas ilustradas 📖✨

Acompanhar seu próprio progresso ⭐

🚀 Tecnologias
Tecnologia	Uso
React Native + Expo	Aplicativo mobile
React Native Paper	UI Components e estilização
React Navigation	Navegação entre telas
Context API	Armazenar progresso
TypeScript	Tipagem e segurança
🖌 Identidade Visual

O app usa cores leves e amigáveis para o público infantil:

Elemento	Cor
Fundo principal	#FFF3D8
Destaques	#4A90E2
Componentes interativos	#FFD98E / #FF7043

Interfaces com botões grandes, ícones e textos claros para facilitar o aprendizado.

📱 Telas do Aplicativo
Tela	Descrição
🏠 Home	Menu principal com cartões de atividades
🔡 Sílabas	Ensino visual das sílabas
🧩 Montar Palavra	Ordenação de letras com feedback imediato
📘 Histórias	Pequenas histórias para incentivar a leitura
👤 Perfil	Progresso da alfabetização com gamificação
🧠 Lógica Educacional

✔ Aprendizagem por reforço positivo
✔ Feedback visual (cores, emojis, animações)
✔ Progressão gradual
✔ Erros tratados naturalmente: “Tente novamente!”
✔ Letras repetidas e uso controlado das opções disponíveis

📦 Instalação e Execução
# Clone o repositório
git clone https://github.com/SEU_USUARIO/alfabetizacao-app.git

# Acesse o projeto
cd alfabetizacao-app

# Instale as dependências
npm install

# Execute no Expo
npm start


Abra o app no celular com o Expo Go 📲

🗂 Estrutura do Projeto
src/
 ├─ screens/
 │  ├─ HomeScreen.tsx
 │  ├─ SyllablesScreen.tsx
 │  ├─ WordsScreen.tsx
 │  ├─ StoryScreen.tsx
 │  └─ ProfileScreen.tsx
 ├─ navigation/
 │  └─ MainTabs.tsx
 ├─ contexts/
 │  └─ ProgressContext.tsx
 └─ assets/
    ├─ imagens
    └─ (sem áudios 🚫)
