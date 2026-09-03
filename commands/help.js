const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╔═══════════════════╗
    *🤖 ${settings.botName || 'AlinBot'}*
   الإصدار: *${settings.version || '3.0.0'}*
   المطوّر: ${settings.botOwner || 'Mr Unique Hacker'}
   YT : ${global.ytch}
╚═══════════════════╝

*الأوامر المتاحة:*

╔═══════════════════╗
🌐 *الأوامر العامة*:
║ ➤ .مساعدة أو .قائمة
║ ➤ .بنج
║ ➤ .حي
║ ➤ .صوت <النص>
║ ➤ .المالك
║ ➤ .نكتة
║ ➤ .اقتباس
║ ➤ .حقيقة
║ ➤ .طقس <المدينة>
║ ➤ .أخبار
║ ➤ .attp <النص>
║ ➤ .كلمات <اسم_الأغنية>
║ ➤ .8ball <السؤال>
║ ➤ .معلومات_المجموعة
║ ➤ .المشرفون أو .admins
║ ➤ .vv
║ ➤ .ترجمة <النص> <اللغة>
║ ➤ .لقطة <الرابط>
║ ➤ .معرف
║ ➤ .رابط
╚═══════════════════╝ 

╔═══════════════════╗
👮‍♂️ *أوامر المشرفين*:
║ ➤ .حظر @مستخدم
║ ➤ .ترقية @مستخدم
║ ➤ .خفض @مستخدم
║ ➤ .كتم <بالدقائق>
║ ➤ .الغاء_الكتم
║ ➤ .حذف أو .del
║ ➤ .طرد @مستخدم
║ ➤ .التحذيرات @مستخدم
║ ➤ .تحذير @مستخدم
║ ➤ .منع_الروابط
║ ➤ .منع_الكلمات
║ ➤ .مسح
║ ➤ .tag <رسالة>
║ ➤ .اشارة_للجميع
║ ➤ .اشارة_لغير_المشرفين
║ ➤ .اشارة_مخفية <رسالة>
║ ➤ .روبوت_الدردشة
║ ➤ .اعادة_الرابط
║ ➤ .منع_الاشارة <تشغيل/إيقاف>
║ ➤ .ترحيب <تشغيل/إيقاف>
║ ➤ .وداع <تشغيل/إيقاف>
║ ➤ .وصف_المجموعة <الوصف>
║ ➤ .اسم_المجموعة <الاسم_الجديد>
║ ➤ .صورة_المجموعة (بالرد على صورة)
╚═══════════════════╝

╔═══════════════════╗
🔒 *أوامر المالك*:
║ ➤ .الوضع <عام/خاص>
║ ➤ .مسح_الجلسة
║ ➤ .منع_الحذف
║ ➤ .مسح_المؤقت
║ ➤ .تحديث
║ ➤ .الاعدادات
║ ➤ .الصورة_الشخصية <بالرد على صورة>
║ ➤ .تفاعل_تلقائي <تشغيل/إيقاف>
║ ➤ .حالة_تلقائية <تشغيل/إيقاف>
║ ➤ .حالة_تلقائية تفاعل <تشغيل/إيقاف>
║ ➤ .كتابة_تلقائية <تشغيل/إيقاف>
║ ➤ .قراءة_تلقائية <تشغيل/إيقاف>
║ ➤ .منع_المكالمات <تشغيل/إيقاف>
║ ➤ .حظر_الخاص <تشغيل/إيقاف/الحالة>
║ ➤ .حظر_الخاص setmsg <النص>
║ ➤ .setmention <بالرد على رسالة>
║ ➤ .mention <تشغيل/إيقاف>
╚═══════════════════╝

╔═══════════════════╗
🎨 *أوامر الصور والملصقات*:
║ ➤ .blur <image>
║ ➤ .تحويل_ملصق <بالرد على ملصق>
║ ➤ .ملصق <بالرد على صورة>
║ ➤ .ازالة_الخلفية
║ ➤ .تحسين
║ ➤ .قص <بالرد على صورة>
║ ➤ .ملصق_تيليجرام <الرابط>
║ ➤ .ميم
║ ➤ .take <packname>
║ ➤ .مزج_الايموجي <إيموجي1>+<إيموجي2>
║ ➤ .igs <insta link>
║ ➤ .igsc <insta link>
╚═══════════════════╝  

╔═══════════════════╗
🖼️ *أوامر الصور*:
║ ➤ .pies <country>
║ ➤ .china
║ ➤ .indonesia
║ ➤ .japan
║ ➤ .korea
║ ➤ .hijab
╚═══════════════════╝

╔═══════════════════╗
🎮 *أوامر الألعاب*:
║ ➤ .لعبة_اكس_او @مستخدم
║ ➤ .المشنقة
║ ➤ .guess <letter>
║ ➤ .معلومات
║ ➤ .answer <answer>
║ ➤ .truth
║ ➤ .dare
╚═══════════════════╝

╔═══════════════════╗
🤖 *أوامر الذكاء الاصطناعي*:
║ ➤ .ذكاء_اصطناعي <السؤال>
║ ➤ .gemini <question>
║ ➤ .تخيل <الوصف>
║ ➤ .flux <prompt>
║ ➤ .sora <prompt>
╚═══════════════════╝

╔═══════════════════╗
🎯 *أوامر الترفيه*:
║ ➤ .إطراء @مستخدم
║ ➤ .إهانة @مستخدم
║ ➤ .flirt
║ ➤ .shayari
║ ➤ .goodnight
║ ➤ .roseday
║ ➤ .character @user
║ ➤ .wasted @user
║ ➤ .ship @user
║ ➤ .simp @user
║ ➤ .stupid @user [text]
╚═══════════════════╝

╔═══════════════════╗
🔤 *أوامر إنشاء النصوص*:
║ ➤ .تصميم_نصي <النص>
║ ➤ .ice <text>
║ ➤ .snow <text>
║ ➤ .impressive <text>
║ ➤ .matrix <text>
║ ➤ .light <text>
║ ➤ .neon <text>
║ ➤ .devil <text>
║ ➤ .purple <text>
║ ➤ .thunder <text>
║ ➤ .leaves <text>
║ ➤ .1917 <text>
║ ➤ .arena <text>
║ ➤ .hacker <text>
║ ➤ .sand <text>
║ ➤ .blackpink <text>
║ ➤ .glitch <text>
║ ➤ .fire <text>
╚═══════════════════╝

╔═══════════════════╗
📥 *أوامر التحميل*:
║ ➤ .تحميل <اسم_الأغنية>
║ ➤ .اغنية <اسم_الأغنية>
║ ➤ .سبوتيفاي <البحث>
║ ➤ .انستجرام <الرابط>
║ ➤ .فيسبوك <الرابط>
║ ➤ .تيك_توك <الرابط>
║ ➤ .فيديو <اسم الأغنية>
║ ➤ .ytmp4 <الرابط>
╚═══════════════════╝

╔═══════════════════╗
🧩 *أوامر متنوعة*:
║ ➤ .قلب
║ ➤ .horny
║ ➤ .circle
║ ➤ .lgbt
║ ➤ .lolice
║ ➤ .its-so-stupid
║ ➤ .namecard
║ ➤ .oogway
║ ➤ .tweet
║ ➤ .ytcomment
║ ➤ .comrade
║ ➤ .gay
║ ➤ .glass
║ ➤ .jail
║ ➤ .passed
║ ➤ .triggered
╚═══════════════════╝

╔═══════════════════╗
🖼️ *أوامر الأنمي*:
║ ➤ .أنمي
║ ➤ .poke
║ ➤ .cry
║ ➤ .kiss
║ ➤ .pat
║ ➤ .hug
║ ➤ .wink
║ ➤ .facepalm
╚═══════════════════╝

╔═══════════════════╗
💻 *أوامر GitHub:*
║ ➤ .git
║ ➤ .جيثب
║ ➤ .sc
║ ➤ .script
║ ➤ .repo
╚═══════════════════╝

انضم إلى قناتنا لمعرفة آخر التحديثات:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: 'https://whatsapp.com/channel/0029VbE8McO8aKvROtr6rj07',
                        newsletterName: 'AlinBot',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: 'https://whatsapp.com/channel/0029VbE8McO8aKvROtr6rj07',
                        newsletterName: 'AlinBot by Mr Unique Hacker',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;