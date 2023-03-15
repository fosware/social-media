
export default function Card({children,noPadding}) {
    let classesTw = 'bg-white shadow-md shadow-gray-300 rounded-md mb-5';
    if (!noPadding) {
       classesTw += ' p-4';
    }
    return (
      <div className={`${classesTw}`}>
        {children}
      </div>
    );
  }