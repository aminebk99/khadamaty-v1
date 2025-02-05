

const MainContent = () => {
  return (
    <main className="flex-grow p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">
          Demandez le service que vous voulez, quand vous le voulez
        </h2>
        <p className="mb-6">avec l'application Khadamaty</p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Google Play
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            AppStore
          </a>
        </div>
      </div>
    </main>
  );
};

export default MainContent; 