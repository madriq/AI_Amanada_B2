import React, { useState } from 'react';

const PeopleTransformer = () => {
  const [inputData, setInputData] = useState('');
  const [transformedData, setTransformedData] = useState(null);

  const transformData = (data) => {
    try {
      const parsedData = JSON.parse(data);
      const result = {};
      
      parsedData.forEach(person => {
        result[person.name] = {
          age: person.age,
          birthday: person.birthday
        };
      });
      
      return result;
    } catch (error) {
      console.error('Error transforming data:', error);
      return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = transformData(inputData);
    setTransformedData(result);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">People Data Transformer</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          className="w-full p-2 border rounded mb-2"
          rows="6"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="Enter JSON data here..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Transform Data
        </button>
      </form>
      
      {transformedData && (
        <div>
          <h3 className="text-xl font-bold mb-2">Transformed Result:</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-auto">
            {JSON.stringify(transformedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default PeopleTransformer; 