import React, {useState} from 'react';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import uuid from "uuid/v4";
import FotoUtils from './FotoUtils';
import {Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const columnsFromBackend = {
  [uuid()]: {
    name: "Foto",
    items: FotoUtils.itemsFromBackend.sort((a,b) => 0.1- Math.random())
  },
  [uuid()]: {
    name: "Abbigliamento",
    items: []
  },
  [uuid()]: {
    name: "Cibo",
    items: []
  },
  [uuid()]: {
    name: "Animali",
    items: []
  },
      [uuid()]: {
  name: "Trasporti",
      items: []
}
};

const onBeforeDragStart = (result, columns, setColumns) => {
  Object.keys(columns).map(column => columns[column].style=undefined);
}

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const listElement = columnsFromBackend[Object.keys(columnsFromBackend)[0]].items.filter(element => element.id === result.draggableId)[0];
    if(listElement.name.toUpperCase()===destColumn.name.toUpperCase()) {
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      destColumn.style={borderColor: "green",borderStyle: "solid"};
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    }
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

function App() {
  const [columns, setColumns] = useState(columnsFromBackend);

  document.title = 'Abbina Gli Elementi';
  return (
      <div style={{ display: "flex", justifyContent: "center", 

      }}>
        <DragDropContext
            onDragEnd={result => onDragEnd(result, columns, setColumns)}
            onBeforeDragStart={result => onBeforeDragStart(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
                <Col xm={2}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center" ,
                        background: "#0277bd",
                        minWidth: "50px",
                        borderRadius: "5px",
                        maxWidth: "300px",
                        maxHeight: "500",
                        margin: 8 ,
                       borderColor: column.style!==undefined ? column.style.borderColor :  "none",
                       borderStyle: column.style!==undefined ? column.style.borderStyle : "none"
                    }}
                    key={columnId}          className="overflow-auto"
                >
                  <h4 style={{color:"white"}}>{column.name}</h4>
                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                  width: 150,
                                  minHeight: 500,
                                  maxHeight: 500,
                                  justifyContent: "center",
                                }}

                            >
                              {column.items.map((item, index) => {
                                return (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.id}
                                        index={index}
                                        name={item.name}
                                        style={{paddingBottom: "5px",paddingTop:"5px"}}
                                    >
                                      {(provided, snapshot) => {
                                        return (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                              <img src={item.src} name={item.name} width={140} height={150}/>
                                            </div>
                                        );
                                      }}
                                    </Draggable>
                                );
                              })}
                              {provided.placeholder}
                            </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </Col>
            );
          })}
        </DragDropContext>
      </div>
  );
}

export default App;
