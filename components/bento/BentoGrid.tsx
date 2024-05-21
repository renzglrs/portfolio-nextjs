const BentoGrid = () => {
  return (
    <>
        <section>
            <h2 className="text-2xl font-medium pb-4">Bento Grid Test</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4">
                <div className="col-span-2 row-span-2 bg-gray-500  p-4 rounded">Large Item 1</div>
                <div className="bg-gray-500  p-4 rounded">Item 2</div>
                <div className="bg-gray-500  p-4 rounded">Item 3</div>
                <div className="bg-gray-500  p-4 rounded">Item 4</div>
                <div className="bg-gray-500  p-4 rounded">Item 5</div>
                <div className="col-span-2 bg-gray-500  p-4 rounded">Wide Item 6</div>
                <div className="bg-gray-500  p-4 rounded">Item 7</div>
                <div className="bg-gray-500 p-4 rounded">Item 8</div>
            </div>
        </section>
    </>
  )
}

export default BentoGrid