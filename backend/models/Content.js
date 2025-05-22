// backend/models/Content.js
import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  page: { 
    type: String, 
    required: true, 
    enum: ['home', 'about', 'services', 'contact', 'projects', 'blog'],
    index: true
  },
  section: { 
    type: String, 
    required: true,
    enum: [
      'hero', 
      'services', 
      'testimonials', 
      'cta', 
      'clients',
      'header',
      'footer',
      'metadata'
    ],
    index: true 
  },
  content: { 
    type: mongoose.Schema.Types.Mixed, 
    required: true,
    validate: {
      validator: function(value) {
        // Validación básica para evitar objetos vacíos
        return value && Object.keys(value).length > 0;
      },
      message: 'El contenido no puede estar vacío'
    }
  },
  lastUpdated: { 
    type: Date, 
    default: Date.now,
    index: true 
  }
}, { 
  versionKey: false,
  timestamps: false,
  toJSON: {
    virtuals: false,
    transform: function(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      return ret;
    }
  }
});

// Índice compuesto para búsquedas eficientes
contentSchema.index({ page: 1, section: 1 }, { unique: true });

// Middleware para actualizar lastUpdated antes de guardar
contentSchema.pre('save', function(next) {
  this.lastUpdated = new Date();
  next();
});

// Método estático para obtener contenido por página y sección
contentSchema.statics.findByPageAndSection = async function(page, section) {
  return this.findOne({ page, section });
};

// Método estático para actualizar contenido
contentSchema.statics.updateContent = async function(page, section, newContent) {
  return this.findOneAndUpdate(
    { page, section },
    { content: newContent, lastUpdated: new Date() },
    { upsert: true, new: true }
  );
};

const Content = mongoose.model('Content', contentSchema);

export default Content;