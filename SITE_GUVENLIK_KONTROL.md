# Kişisel site: güvenlik ve veri koruma kontrol kaydı

Son kontrol: 2026-11-06
Kapsam: `must7y.github.io/muhammetdemir/` adresindeki **kişisel tanıtım sitesi**. Mobil uygulamaları veya diğer web sitelerini kapsamaz.

## Mevcut yaklaşım
- GitHub Pages üzerinde statik HTML/CSS/JS; giriş hesabı, ödeme, veritabanı, çalışır iletişim formu ve kullanıcı yüklemesi yok.
- Ziyaretçi analitiği, reklam pikseli, pazarlama çerezi, yerel depolama ve üçüncü taraf web fontu kullanılmıyor.
- İletişim, e-posta uygulaması üzerinden gerçekleşiyor; site kendi sunucusuna mesaj almıyor.
- E-posta adresi istemci tarafında oluşturuluyor. Bu yöntem yalnızca basit adres toplayıcıların işini zorlaştırabilir; gelişmiş botlara karşı garanti vermez.
- Statik sayfalarda CSP meta etiketi ile kaynaklar kısıtlanıyor. GitHub Pages özel HTTP güvenlik başlıkları sunmadığından bunun sınırlamaları vardır.
- Türkçe ve İngilizce gizlilik/çerez bilgilendirmesi bulunuyor. Google doğrulama HTML dosyası korunuyor.

## Gelecekte değişiklik öncesinde zorunlu kontrol
1. Analitik, reklam, izleme, piksel veya zorunlu olmayan çerez eklenmeden **önce** KVKK, gerekiyorsa GDPR/ePrivacy koşulları, açık rıza yöntemi ve aydınlatma metni gözden geçirilmeli.
2. Form eklenmeden **önce** veri sorumluluğu, veri saklama, aydınlatma, bot/spam koruması, sunucu tarafı doğrulama ve oran sınırlaması sağlanmalı.
3. Üçüncü taraf font, video, harita, CDN, yorum veya gömme kod eklenmeden IP adresi/dış aktarım etkisi incelenmeli.
4. Siteye gizli anahtar, şifre, erişim belirteci, servis hesabı anahtarı veya kullanıcı bilgisi GitHub deposuna yazılmamalı.
5. HTML içinde yer alan JSON-LD değişirse CSP içindeki ilgili SHA-256 hash değeri de yeniden hesaplanmalı.
6. GitHub hesabında iki faktörlü doğrulama açık tutulmalı; erişim yetkileri ve başarısız Pages yayınları takip edilmeli.
7. Mobil oyunlar için ayrı gizlilik ve çocuk verisi değerlendirmesi yapılmalı; bu sitenin politikası oyunun politikası yerine geçmez.

## Açık hukuki/teknik sınırlar
- GitHub Pages ziyaretçi IP adreslerini güvenlik amacıyla kaydedebilir. E-posta yazışmaları Google altyapısından geçebilir. KVKK m.9 yurt dışına aktarım şartları ve somut veri sorumlusu yükümlülükleri gerektiğinde uzman değerlendirmesi ister.
- GitHub Pages üzerinde WAF kuralları, özel HTTP yanıt başlıkları, gerçek sunucu tarafı rate limiting veya otomatik kötü niyetli bot engelleme ayarları buradan yapılandırılamaz. İhtiyaç oluşursa destekleyen bir barındırma/ara katman değerlendirilmelidir.
- Yazılı bilgilendirme veya CSP eklemek tek başına mevzuata tam uyum ya da saldırılara karşı tam koruma garantisi değildir.

Resmî bilgi: https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu- ; https://www.kvkk.gov.tr/Icerik/7353/Cerez-Uygulamalari-Hakkinda-Rehber ; https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
