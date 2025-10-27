import mongoose, { Document, Schema } from 'mongoose';

interface IOpeningHours {
  day: string;
  hours: string;
  isOpen?: boolean;
}

interface IFAQ {
  question: string;
  answer: string;
}

interface IEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'festival' | 'pooja' | 'special';
  description: string;
  contact?: string;
}

interface ITravelInfo {
  fromJubileeBusStation: string;
  fromShamirpet: string;
  fromORRExit: string;
}

export interface ITemple extends Document {
  id: string;
  name: string;
  location: string;
  deity: string;
  description: string;
  shortDescription: string;
  image: string;
  region: 'Mangalore' | 'Udupi' | 'Kundapura';
  openingHours: IOpeningHours[];
  faqs: IFAQ[];
  events: IEvent[];
  travelInfo: ITravelInfo;
  averageRating: number;
  totalReviews: number;
  createdAt: Date;
  updatedAt: Date;
}

const templeSchema = new Schema<ITemple>(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: [true, 'Please provide temple name'],
      trim: true
    },
    location: {
      type: String,
      required: [true, 'Please provide location']
    },
    deity: {
      type: String,
      required: [true, 'Please provide deity name']
    },
    description: {
      type: String,
      required: [true, 'Please provide description']
    },
    shortDescription: {
      type: String,
      required: [true, 'Please provide short description']
    },
    image: {
      type: String,
      default: '/placeholder.svg'
    },
    region: {
      type: String,
      enum: ['Mangalore', 'Udupi', 'Kundapura'],
      required: true
    },
    openingHours: [{
      day: String,
      hours: String,
      isOpen: Boolean
    }],
    faqs: [{
      question: String,
      answer: String
    }],
    events: [{
      id: String,
      title: String,
      date: String,
      time: String,
      type: {
        type: String,
        enum: ['festival', 'pooja', 'special']
      },
      description: String,
      contact: String
    }],
    travelInfo: {
      fromJubileeBusStation: String,
      fromShamirpet: String,
      fromORRExit: String
    },
    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    totalReviews: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

// Index for better search performance
templeSchema.index({ name: 'text', location: 'text', deity: 'text' });
templeSchema.index({ region: 1 });
templeSchema.index({ averageRating: -1 });

export default mongoose.model<ITemple>('Temple', templeSchema);
