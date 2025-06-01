import { useState, useEffect } from 'react';
import './index.css';
import { Calendar, ChevronDown, ChevronUp, Clock, MapPin, Medal } from 'lucide-react';

export function App() {
  // State for FAQ accordion
  const [openFaqs, setOpenFaqs] = useState<number[]>([0, 1]);
  
  // Set up fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Add RTL direction to body
    document.body.dir = 'rtl';
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const toggleFaq = (index: number) => {
    if (openFaqs.includes(index)) {
      setOpenFaqs(openFaqs.filter(item => item !== index));
    } else {
      setOpenFaqs([...openFaqs, index]);
    }
  };

  return (
    <div className="carnival-app" style={{ fontFamily: 'Tajawal, sans-serif' }}>
      {/* Header */}
      <div className="font-vazirmatn">

      <header className="bg-[#FF4438] text-white py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <div className="logo">
          
          <img src="/images/logoKarnivalDwawer.png" alt="كرنفال" className="h-10 object-contain" />
        </div>
        <nav className="flex items-center gap-6">
          <a href="#about" className="text-white hover:text-yellow-200">عن الكرنفال</a>
          <a href="#activities" className="text-white hover:text-yellow-200">الفعاليات</a>
          <a href="#schedule" className="text-white hover:text-yellow-200">الجدول</a>
          <a href="#faq" className="text-white hover:text-yellow-200">الأسئلة</a>
          <a href="#register" className="bg-[#FFD100] text-[#FF4438] px-4 py-2 rounded-full font-bold hover:bg-yellow-400">سجل الآن</a>
        </nav>
      </header>
      {/* Hero Section */}
      <section className="hero relative bg-[#FFF5F5] py-12 px-6 min-h-[70vh] flex items-center">
        <div className="confetti absolute inset-0 overflow-hidden pointer-events-none">
          {/* Confetti elements with random positions */}
          <div className="absolute top-[10%] left-[20%] w-2 h-2 bg-[#FF4438] rounded-full"></div>
          <div className="absolute top-[15%] right-[30%] w-3 h-3 bg-[#FFD100] rounded-full"></div>
          <div className="absolute top-[25%] left-[50%] w-2 h-2 bg-[#36B5C5] rounded-full"></div>
          <div className="absolute top-[40%] right-[15%] w-4 h-4 bg-[#FF7A50] rounded-full"></div>
          <div className="absolute top-[60%] left-[35%] w-3 h-3 bg-[#FFD100] rounded-full"></div>
          <div className="absolute top-[70%] right-[40%] w-2 h-2 bg-[#36B5C5] rounded-full"></div>
        </div>
        
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start space-y-6">
          <div className="flex items-center space-x-3">
          <img
                src="/images/logoKarnivalDwawer.png"
                alt="كرنفال"
                className="h-8 object-contain"
              />
              <h1 className="text-5xl animate-float">🎪</h1>
              
            </div>


            <h1 className="text-4xl md:text-5xl font-bold text-[#FF4438] text-center md:text-right">أوّل كرنفال يلف البحرين</h1>
            <p className="text-xl text-[#FF4438] text-center md:text-right">ويوقف عند باب بيتكم!</p>
            
            <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
              <div className="flex items-center gap-2">📆
                <span className="text-[#FF4438] font-bold">متى؟  </span>
                <div className="flex items-center bg-white p-2 rounded-lg">
                  <span className="text-sm mr-1">الجمعة والسبت، أول ويكند بعد عيد الأضحى</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
              📍
                <span className="text-[#FF4438] font-bold">وين؟</span>
                <div className="flex items-center bg-white p-2 rounded-lg">
                  <span className="text-sm mr-1">منتزه الأمير خليفة - الرفاع</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 mt-4">
              <div className="flex items-center gap-2">
                <span className="text-[#FF4438] font-bold">🎟️
                  الدخول:
                  
                  </span>
                <div className="  text-sm font-vazirmatn">مجاني</div>
              </div>
              
              <div className="flex items-center gap-2">🎯
                <span className="text-[#FF4438] font-bold">الفعاليات:</span>
                <span className="text-sm">تبدا من نص دينار</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-2">🌟
              <span className="text-[#FF4438] font-bold">خلك من أول الزوار</span>
            </div>
            
            <button className="bg-[#FF7A50] hover:bg-[#FF6A40] text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 transition-colors mt-4">
              احصل على تذكرتك المجانية!
            </button>
          </div>
          
          <div className="balloon-illustration hidden md:block">
            <img 
                src="/images/logoKarnivalDwawer.png" 
              alt="كرنفال balloons" 
              className="max-h-[400px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about py-16 bg-gradient-to-b from-[#FFF5F5] to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#FF4438] text-center mb-12">عيش أول نسخة من كرنفال متنقل يلف الخليج</h2>
          
          <div className="bg-[#F9F9F7] p-8 rounded-xl shadow-sm max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <img src="/images/logoKarnivalDwawer.png" alt="كرنفال" className="h-12 object-contain" />
            </div>
            
            <p className="text-center text-lg leading-relaxed mb-8">
              خذ حصتك من المتعة قبل ما يطوفك! كرنفال مليان بالمرح والألعاب والفعاليات المناسبة لكل الأعمار.
            </p>
            
            <p className="text-center text-lg leading-relaxed mb-8">
              يوصلك رسالة تذكير + عرض خاص داخل الكرنفال عند التسجيل!
            </p>
            
            <div className="flex justify-center">
              <button className="bg-[#36B5C5] hover:bg-[#2BA3B3] text-white font-bold py-3 px-6 rounded-full transition-colors">
                احصل على تذكرتك المجانية
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="activities py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-2  ">
          <h1 className="text-5xl animate-float">🎉</h1>
          </div>
          <h2 className="text-3xl font-bold text-[#FF4438] text-center mb-12">شنو بيكون موجود؟</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Activity Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-[#FF7A50] text-white py-4 px-6 flex items-center gap-3">
                <span role="img" aria-label="game controller" className="text-2xl">🎮</span>
                <h3 className="font-bold text-xl">ألعاب تفتح النفس</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  من VR وألعاب حركة وتحدي، إلى رسم عائلي، وأشياء تخلي معاك بشكل...
                </p>
                <p className="text-[#FF4438] font-bold">6 دنانير وقعدة تطول اليوم عندي!</p>
              </div>
            </div>
            
            {/* Activity Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-[#FFD100] text-black py-4 px-6 flex items-center gap-3">
                <span role="img" aria-label="food" className="text-2xl">🎤</span>
                <h3 className="font-bold text-xl">جو عالي ما يفوت</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  غني، العب، صور، وتحدى... مع عائلتك أو ربعك، أو حتى خلك وايف تضحك وانستقرام وانت تشوفهم يمرحون
                </p>
              </div>
            </div>
            
            {/* Activity Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-300 to-cyan-800  text-white py-4 px-6 flex items-center gap-3">
                <span role="img" aria-label="cake" className="text-2xl">☕</span>
                <h3 className="font-bold text-xl">قعدات حلوة وأكل لذيذ</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  خذ طاولة وذوق من خيرات الأكل، وقعدات قعدة من قلب...
                </p>
                <p className="text-[#FF4438] font-bold">ما يحتاج تفكير مو غيب - كل شي موجود هني!</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Additional Activity Cards */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-[#36B5C5] text-white py-4 px-6 flex items-center gap-3">
                <span role="img" aria-label="camera" className="text-2xl">📸</span>
                <h3 className="font-bold text-xl">خذ الذكرى تبقى</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  صور وخذكس وحط الصورة مطبوعة... لكل أي لحظة حلوة تساهل تنحفظ.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-[#FF7A50] text-white py-4 px-6 flex items-center gap-3">
              🕓
                <h3 className="font-bold text-xl">من متى لين متى؟</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  كل يوم من 4 العصر إلى 10 بالليل - والمكان يفتح النفس من الزين.
                </p>
                <p className="text-[#FF7A50] font-bold text-center mt-4">شوف الجدول الكامل</p>
              </div>
            </div>
            
           
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="schedule py-16 bg-[#FFF5F5]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#FF4438] text-center mb-12">جدول الفعاليات</h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto mb-8">
            <div className="bg-[#36B5C5] text-white py-4 px-6 text-center">
              <h3 className="font-bold text-xl">برنامج الكرنفال</h3>
            </div>
            
            {/* Friday Schedule */}
            <div className="border-b border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold text-[#FF4438]">الجمعة</h4>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-[#FF4438] ml-2" />
                  <span className="text-gray-600">من 4 العصر إلى 10 بالليل</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-[#e6f7f9] text-[#36B5C5] px-3 py-1 rounded-full text-sm">ألعاب VR</span>
                <span className="bg-[#ffefef] text-[#FF4438] px-3 py-1 rounded-full text-sm">رسم على الوجه</span>
                <span className="bg-[#fff6e0] text-[#FFB100] px-3 py-1 rounded-full text-sm">ألعاب حركية</span>
                <span className="bg-[#fff6e0] text-[#FFB100] px-3 py-1 rounded-full text-sm">أكل</span>
                <span className="bg-[#e6f7f9] text-[#36B5C5] px-3 py-1 rounded-full text-sm">طاولات طعام</span>
                <span className="bg-[#e6f7f9] text-[#36B5C5] px-3 py-1 rounded-full text-sm">فوت برنت</span>
              </div>
            </div>
            
            {/* Saturday Schedule */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold text-[#FF4438]">السبت</h4>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-[#FF4438] ml-2" />
                  <span className="text-gray-600">من 4 العصر إلى 10 بالليل</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-[#e6f7f9] text-[#36B5C5] px-3 py-1 rounded-full text-sm">ألعاب VR</span>
                <span className="bg-[#ffefef] text-[#FF4438] px-3 py-1 rounded-full text-sm">رسم على الوجه</span>
                <span className="bg-[#fff6e0] text-[#FFB100] px-3 py-1 rounded-full text-sm">ألعاب حركية</span>
                <span className="bg-[#fff6e0] text-[#FFB100] px-3 py-1 rounded-full text-sm">أكل</span>
                <span className="bg-[#e6f7f9] text-[#36B5C5] px-3 py-1 rounded-full text-sm">طاولات طعام</span>
                <span className="bg-[#e6f7f9] text-[#36B5C5] px-3 py-1 rounded-full text-sm">فوت برنت</span>
                <span className="bg-[#e6f7f9] text-[#36B5C5] px-3 py-1 rounded-full text-sm">كاريوكي</span>
              </div>
            </div>
          </div>
          
          {/* Warning Box */}
          <div className="bg-[#FFF8ED] border border-[#FFD100] rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <span role="img" aria-label="warning" className="text-3xl">⚠️</span>
              <h3 className="font-bold text-xl text-[#FF4438]">لا تفوت الفرصة!</h3>
            </div>
            <p className="text-gray-700 mt-3">
              نقدر كل يوم نضيف فعالية مفاجأة حماس ومحبوبة، ومنشورة. لأن دواوير كرنفال غير.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-2">
            <span role="img" aria-label="question" className="text-4xl">❓</span>
          </div>
          <h2 className="text-3xl font-bold text-[#FF4438] text-center mb-12">أسئلة يمكن تفكر فيها</h2>
          
          <div className="max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="border-b border-gray-200 py-4">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(0)}
              >
                <h3 className="font-bold text-xl text-[#FF4438]">هل لازم احجز تذكرة قبل؟</h3>
                {openFaqs.includes(0) ? 
                  <ChevronUp className="text-gray-500 h-6 w-6" /> : 
                  <ChevronDown className="text-gray-500 h-6 w-6" />
                }
              </div>
              
              {openFaqs.includes(0) && (
                <div className="mt-3 text-gray-700">
                  <p>احجز تذكرتك المجانية من البرنامج ما ياخذ دقيقة، وقدر تجي في أي وقت من 4 العصر إلى 10 بالليل.</p>
                </div>
              )}
            </div>
            
            {/* FAQ Item 2 */}
            <div className="border-b border-gray-200 py-4">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(1)}
              >
                <h3 className="font-bold text-xl text-[#FF4438]">في رسوم على الفعاليات؟</h3>
                {openFaqs.includes(1) ? 
                  <ChevronUp className="text-gray-500 h-6 w-6" /> : 
                  <ChevronDown className="text-gray-500 h-6 w-6" />
                }
              </div>
              
              {openFaqs.includes(1) && (
                <div className="mt-3 text-gray-700">
                  <p>تبدا من نص دينار بس. يعني تقدر تختار اللي يناسبك وتلعب براحتك.</p>
                </div>
              )}
            </div>
            
            {/* FAQ Item 3 */}
            <div className="border-b border-gray-200 py-4">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(2)}
              >
                <h3 className="font-bold text-xl text-[#FF4438]">هل في مواقف سيارات قريبة؟</h3>
                {openFaqs.includes(2) ? 
                  <ChevronUp className="text-gray-500 h-6 w-6" /> : 
                  <ChevronDown className="text-gray-500 h-6 w-6" />
                }
              </div>
              
              {openFaqs.includes(2) && (
                <div className="mt-3 text-gray-700">
                  <p>إيه أكيد! المواقف متوفرة حول المكان، وتقدر توصل مشي من أقرب نقطة..</p>
                </div>
              )}
            </div>
            
            {/* More FAQ items */}
            <div className="border-b border-gray-200 py-4">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(3)}
              >
                <h3 className="font-bold text-xl text-[#FF4438]">الفعالية مناسبة لأي أعمار؟</h3>
                {openFaqs.includes(3) ? 
                  <ChevronUp className="text-gray-500 h-6 w-6" /> : 
                  <ChevronDown className="text-gray-500 h-6 w-6" />
                }
              </div>
              
              {openFaqs.includes(3) && (
                <div className="mt-3 text-gray-700">
                  <p>من أصغر طفل إلى الجد والجدة – كل واحد بيحصل شي يناسبه. فيه ألعاب خفيفة، وألغاز، وتصوير، وVR، ومناطق جلوس.</p>
                </div>
              )}
            </div>
            
            <div className="border-b border-gray-200 py-4">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(4)}
              >
                <h3 className="font-bold text-xl text-[#FF4438]">هل المكان آمن للأطفال؟</h3>
                {openFaqs.includes(4) ? 
                  <ChevronUp className="text-gray-500 h-6 w-6" /> : 
                  <ChevronDown className="text-gray-500 h-6 w-6" />
                }
              </div>
              
              {openFaqs.includes(4) && (
                <div className="mt-3 text-gray-700">
                  <p>100% آمن ومنظم. في فريق إشراف بكل دائرة، وتعقيم مستمر، ومكان واسع ومفتوح للعوائل.</p>
                </div>
              )}
            </div>
            
            <div className="border-b border-gray-200 py-4">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(5)}
              >
                <h3 className="font-bold text-xl text-[#FF4438]">وش أسوي لو ضيعت شي أو أحد؟</h3>
                {openFaqs.includes(5) ? 
                  <ChevronUp className="text-gray-500 h-6 w-6" /> : 
                  <ChevronDown className="text-gray-500 h-6 w-6" />
                }
              </div>
              
              {openFaqs.includes(5) && (
                <div className="mt-3 text-gray-700">
                  <p>توجه مباشرة لطاولة الاستقبال عند البوابة الرئيسية، فريقنا بيكون موجود ويساعدك فورًا.</p>
                </div>
              )}
            </div>
            
            <div className="py-4">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(6)}
              >
                <h3 className="font-bold text-xl text-[#FF4438]">بترجعون نفس المكان مرة ثانية؟</h3>
                {openFaqs.includes(6) ? 
                  <ChevronUp className="text-gray-500 h-6 w-6" /> : 
                  <ChevronDown className="text-gray-500 h-6 w-6" />
                }
              </div>
              
              {openFaqs.includes(6) && (
                <div className="mt-3 text-gray-700">
                  <p> ما نقدر نوعد، لأن الكرنفال متنقّل... ممكن نرجع، وممكن نروح لمكان ثاني. عشّان كذا، لا تفوّت أول نسخة!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="register py-16 bg-gradient-to-b from-[#FFF5F5] to-[#FF9966]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">احجز تذكرتك المجانية اليوم!</h2>
              <p className="text-gray-700 mb-8">
                سجل الآن واحصل على رسائل تذكير وعروض خاصة للفعاليات.
              </p>
              
              <button className="bg-[#FF7A50] hover:bg-[#FF6A40] text-white font-bold py-3 px-8 rounded-full transition-colors mx-auto">
                احصل على تذكرتك المجانية
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Promotional Banner */}
      <section className="bg-[#36B5C5] py-6">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between bg-[#36B5C5] rounded-lg p-4 border-2 border-dashed border-yellow-300">
            <div className="flex items-center">
              <span className="text-4xl ml-4">🎁</span>
            </div>
            <div className="text-white text-right">
              <h3 className="font-bold text-xl">سجل الآن واحصل على:</h3>
              <p>تذكير قبل الفعالية + عرض خاص 😊</p>
            </div>
          </div>
        </div>
      </section>
</div>
      {/* Footer */}
      <footer className="bg-[#36B5C5] text-white py-8">
        <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center gap-4 order-2 md:order-1 mb-4 md:mb-0">
  {/* أيقونات السوشال ميديا */}
  <div className="flex space-x-4 order-2 md:order-1 mb-4 md:mb-0 md:justify-start w-full md:w-auto md:mr-auto">
              <a href="https://x.com/idwawer?s=21" className="text-white hover:text-yellow-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/idwawer/?igsh=d3d2bGx4NnRzd3p4#" className="text-white hover:text-yellow-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/idwawer/?=d3d2bGx4NnRzd3p4#" className="text-white hover:text-yellow-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>

  {/* شعار كرنفال + النص */}
  <div className="flex items-center space-x-2 rtl:space-x-reverse">
    <img src="/images/logoKarnivalDwawer.png" alt="كرنفال" className="h-8 object-contain" />
    <span className="font-bold text-lg">دواوير كرنفال</span>
  </div>
</div>
          
          <div className="border-t border-teal-500 mt-6 pt-6 text-center">
            <p>© 2025 دواوير كرنفال. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
<div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 order-2 md:order-1 mb-4 md:mb-0">
              <a href="#" className="text-white hover:text-yellow-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-yellow-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-yellow-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
            
            <div className="order-1 md:order-2 mb-4 md:mb-0 text-center md:text-right">
              <div className="flex justify-center md:justify-end mb-2">
                <img src="/images/logoKarnivalDwawer.png" alt="كرنفال" className="h-10 object-contain" />
              </div>
              <h3 className="text-xl font-bold">دواوير كرنفال</h3>
              <p className="text-white">أول كرنفال منتظرك في البحرين</p>
            </div>
          </div>