const { DataTypes, Sequelize } = require('sequelize');
module.exports = (sequelize) => {
  
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Name cannot be null'// validamos para que no este nulo name
        },
        notEmpty: {
          msg: 'Name cannot be empty' // validamos para que no esté vacío el nombre del pokemon
        },
        len: {
          args: [3, 50],
          msg: "The name must have between 3 and 50 characters"
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isUrl: {
          msg: 'Invalid URL for the Pokemon Image.'// verificar que la imagen sea una url
        },
        notEmpty: {
          msg: 'Image cannot be empty' // validamos para que no esté vacío la imagen
        },
        notNull: {
          msg: 'Image cannot be null' // validamos para que no este nula la imagen
        }
      }
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: 'HP must be a number' // validamos para que sea un numero entero
        },
        notNull: {
          msg: 'HP cannot be null' // validamos para que no este nulo hp
        },
        notEmpty: {
          msg: 'HP cannot be empty' // validamos para que no esté vacío el HP
        },
        min: {
          args: [100],
          msg: 'HP must be greater than or equal to 100' // validamos que los puntos de vida sean minimo 100
        },
        max: {
          args: [500],
          msg: 'HP must be less than or equal to 500' // validamos que los puntos de vida sean maximo 500
        }
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: 'Attack power must be a number' // validamos para que sea un numero entero
        },
        notNull: {
          msg: 'Attack power cannot be null' // validamos para que no este nulo ataque
        },
        notEmpty: {
          msg: 'Attack power cannot be empty' // validamos para que no esté vacío el ataque
        },
        min: {
          args: [5],
          msg: 'Attack power must be greater than or equal to 5' // validamos que el poder de ataque sea minimo 5
        },
        max: {
          args: [200],
          msg: 'Attack power must be less than or equal to 200' // validamos que el poder de ataque sea maximo 200
        }
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: 'Defense points must be a number' // validamos para que sea un numero entero
        },
        notNull: {
          msg: 'Defense points cannot be null' // validamos para que no este nulo defensa
        },
        notEmpty: {
          msg: 'Defense points cannot be empty' // validamos para que no esté vacío la defensa
        },
        min: {
          args: [5],
          msg: 'Defense must be greater than 5' // validamos que los puntos de defensa sean minimo 5
        },
        max: {
          args: [200],
          msg: 'Defense must be less than or equal to 200' // validamos que los puntos de defensa sean maximo 200
        }
      }
    },
    speed:{
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          msg: 'Speed must be a number' // validamos para que sea un numero entero
        },
        min: {
          args: [10],
          msg: 'Speed must be greater than 10' // validamos que los puntos de velocidad sean minimo 10
        },
        max: {
          args: [150],
          msg: 'Speed must be less than 150' // validamos que los puntos de velocidad sean maximo 150
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          msg: 'Height must be a number' // validamos para que sea un numero entero
        },
        min: {
          args: [1],
          msg: 'Height must be greater than 1' // validamos que el tamaño del jugador sea minimo 1
        },
        max: {
          args: [15],
          msg: 'Height must be less than 15' // validamos que el tamaño del jugador sea maximo 15
        }
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          msg: 'Weight must be a number' // validamos para que sea un numero entero
        },
        min: {
          args: [1],
          msg: 'Weight must be greater than 1' // validamos que el peso del jugador sea minimo 1
        },
        max: {
          args: [1000],
          msg: 'Weight must be less than 1000' // validamos que el peso del jugador sea maximo 1000
        }
      }
    }
  }, {
    timestamps: false,
  });
};
