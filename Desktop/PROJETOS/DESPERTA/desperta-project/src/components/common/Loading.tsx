import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-50">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-12 h-12 text-primary-500 animate-spin" />
        <p className="text-primary-600 font-medium">Despertando...</p>
      </div>
    </div>
  );
};

export default Loading;