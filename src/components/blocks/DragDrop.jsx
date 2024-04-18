import React, { useState } from 'react';

function DragDrop() {
    const [blocks, setBlocks] = useState([
        { id: 1, text: 'Block 1' },
        { id: 2, text: 'Block 2' },
        { id: 3, text: 'Block 3' }
    ]);

    const handleDragStart = (e, id) => {
        e.dataTransfer.setData('text/plain', id);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, dropId) => {
        const dragId = e.dataTransfer.getData('text/plain');
        const dragIndex = blocks.findIndex(block => block.id === parseInt(dragId));
        const dropIndex = blocks.findIndex(block => block.id === parseInt(dropId));
        const newBlocks = [...blocks];
        const [dragItem] = newBlocks.splice(dragIndex, 1);
        newBlocks.splice(dropIndex, 0, dragItem);
        setBlocks(newBlocks);
    };

    return (
        <div>
            {blocks.map(block => (
                <div
                    key={block.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, block.id)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, block.id)}
                    style={{ border: '1px solid black', margin: '5px', padding: '10px' }}
                >
                    {block.text}
                </div>
            ))}
        </div>
    );
}

export default DragDrop;
