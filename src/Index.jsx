import { useState, useEffect } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
function Index() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [deletingFileId, setDeletingFileId] = useState(null);
  const [toast, setToast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [resultsnoti,setresultnoti]=useState();

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  // Fetch files on component mount
  useEffect(() => {
    if (currentPage === 'dashboard') {
      fetchFiles();
    }
  }, [currentPage]);

  const fetchFiles = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/files`);
      if (!response.ok) {
        throw new Error('Failed to fetch files');
      }
      const data = await response.json();
      setFiles(data.files || []);
    } catch (error) {
      console.error('Error fetching files:', error);
      showToast('Failed to load files', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const validateFile = (file) => {
    const maxSize = 100 * 1024 * 1024; // 100MB
    
    if (file.size > maxSize) {
      throw new Error('File size exceeds 100MB limit');
    }
    
    return true;
  };

  const handleFileUpload = async (file) => {
    try {
      validateFile(file);
      setIsUploading(true);
      setUploadProgress(0);

      const formData = new FormData();
      formData.append('file', file);

      // Simulate progress tracking
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      const response = await fetch(`${API_BASE_URL}/api/upload`, {
        method: 'POST',
        body: formData,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed');
      }

      const data = await response.json();








console.log(data.result)
setresultnoti(data.result);


      // Add the new file to the list
      const newFile = {
        ...data,
        uploadDate: new Date().toISOString()
      };
      setFiles(prev => [newFile, ...prev]);
      showToast('File uploaded successfully!', 'success');
      
    } catch (error) {
      const errorMessage = error.message || 'Upload failed';
      showToast(errorMessage, 'error');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleFileDelete = async (fileId) => {
    try {
      setDeletingFileId(fileId);
      const response = await fetch(`${API_BASE_URL}/api/files/${fileId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Delete failed');
      }
      
      // Remove the file from the list
      setFiles(prev => prev.filter(file => (file.id || file.fileId) !== fileId));
      showToast('File deleted successfully!', 'success');
      
    } catch (error) {
      const errorMessage = error.message || 'Delete failed';
      showToast(errorMessage, 'error');
    } finally {
      setDeletingFileId(null);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'dashboard':
        return (
          <DashboardPage
            files={files}
            isUploading={isUploading}
            uploadProgress={uploadProgress}
            deletingFileId={deletingFileId}
            handleFileUpload={handleFileUpload}
            handleFileDelete={handleFileDelete}
            fetchFiles={fetchFiles}
            isLoading={isLoading}
          />
        );
      case 'about':
        return <AboutPage />;
      case 'features':
        return <FeaturesPage />;
      case 'server':
        return <ServerPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex flex-col">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        resultsnoti={resultsnoti}
      />

      <main className="flex-1 container mx-auto px-4 py-8">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
} export default Index;