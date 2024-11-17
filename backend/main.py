from fastapi import FastAPI, Request
from typing import List
from utils import is_dag
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')
def read_root():
    return {'message': 'Welcome!'}

@app.get('/ping')
def read_root():
    return {'Ping': 'Pong'}

@app.post("/pipelines/parse")
async def parse_pipeline(request: Request):
    data = await request.json()  
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])
    len_edges = len(edges)
    len_nodes = len(nodes)

    return {
        "num_nodes": len_nodes,
        "num_edges": len_edges,
        "is_dag": is_dag(nodes, edges),
    }

# Sample Payload :
#  {
#     "nodes": [{"id": "A"}, {"id": "B"}, {"id": "C"}, {"id": "D"}],
#     "edges": [
#       {"source": "A", "target": "B"},
#       {"source": "B", "target": "C"},
#       {"source": "C", "target": "D"}   
#     ]
#  }

# Sample response :
# {
#     "num_nodes": 4,
#     "num_edges": 3,
#     "is_dag": true
# }