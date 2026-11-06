# Kişisel site: güvenlik ve veri koruma kontrol kaydı

Son kontrol: 2026-11-06
Kapsam: `must7y.github.io/muhammetdemir/` adresindeki **kişisel tanıtım sitesi**. Mobil uygulamaları veya diğer web sitelerini kapsamaz.

## Mevcut yaklaşım
- GitHub Pages üzerinde statik HTML/CSS/JS; giriş hesabı, ödeme, veritabanı, çalışır iletişim formu ve kullanıcı yüklemesi yok.
- Ziyaretçi analitiği, reklam pikseli, pazarlama çerezi, yerel depolama ve üçüncü taraf web fontu kullanılmıyor.
- İletişim bölümü, alanları ve gönderim düğmesi devre dışı olan bir form taslağıdır; henüz herhangi bir ileti gönderilmez.
- E-posta adresi mevcut HTML/JS/CSS kaynaklarından kaldırıldı. Ancak daha önce yayımlanan içerikler, Git geçmişi ve arama önbellekleri adresi hâlâ içerebilir; bu nedenle mutlak gizlilik veya spam koruması vaat edilmez.
- Kişisel veri toplayacak form hizmeti bağlanmadan ve hukuki kontroller yapılmadan gönderim açılmamalı.
- Statik sayfalarda CSP meta etiketi ile kaynaklar kısıtlanıyor. GitHub Pages özel HTTP güvenlik başlıkları sunmadığından bunun sınırlamaları vardır.
- Türkçe ve İngilizce gizlilik/çerez bilgilendirmesi bulunuyor. Google doğrulama HTML dosyası korunuyor.

## Gelecekte değişiklik öncesinde zorunlu kontrol
1. Analitik, reklam, izleme, piksel veya zorunlu olmayan çerez eklenmeden **önce** KVKK, gerekiyorsa GDPR/ePrivacy koşulları, açık rıza yöntemi ve aydınlatma metni gözden geçirilmeli.
2. Form **gönderime açılmadan önce** veri sorumluluğu, veri saklama, aydınlatma, bot/spam koruması, sunucu tarafı doğrulama ve oran sınırlaması sağlanmalı.
3. Üçüncü taraf font, video, harita, CDN, yorum veya gömme kod eklenmeden IP adresi/dış aktarım etkisi incelenmeli.
4. Siteye gizli anahtar, şifre, erişim belirteci, servis hesabı anahtarı veya kullanıcı bilgisi GitHub deposuna yazılmamalı.
5. HTML içinde yer alan JSON-LD değişirse CSP içindeki ilgili SHA-256 hash değeri de yeniden hesaplanmalı.
6. GitHub hesabında iki faktörlü doğrulama açık tutulmalı; erişim yetkileri ve başarısız Pages yayınları takip edilmeli.
7. Mobil oyunlar için ayrı gizlilik ve çocuk verisi değerlendirmesi yapılmalı; bu sitenin politikası oyunun politikası yerine geçmez.

## Açık hukuki/teknik sınırlar
- GitHub Pages ziyaretçi IP adreslerini güvenlik amacıyla kaydedebilir. Gelecekte kullanılacak iletişim sağlayıcısının verileri nerede işlediği ve KVKK m.9 yurt dışına aktarım şartları ayrıca incelenmelidir. Form kapalıyken siteden mesaj alınmamaktadır.
- GitHub Pages üzerinde WAF kuralları, özel HTTP yanıt başlıkları, gerçek sunucu tarafı rate limiting veya otomatik kötü niyetli bot engelleme ayarları buradan yapılandırılamaz. İhtiyaç oluşursa destekleyen bir barındırma/ara katman değerlendirilmelidir.
- Yazılı bilgilendirme veya CSP eklemek tek başına mevzuata tam uyum ya da saldırılara karşı tam koruma garantisi değildir.

Resmî bilgi: https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu- ; https://www.kvkk.gov.tr/Icerik/7353/Cerez-Uygulamalari-Hakkinda-Rehber ; https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

## İletişim formunu açmadan önce (bekleyen işlemler)
1. Formspree hesabında **bireysel bir form oluşturulmalı**; bildirim alıcısı ayrı yönetim panelinde tanımlanmalı, alıcı adresi GitHub koduna yazılmamalıdır.
2. Formun gerçek `https://formspree.io/f/...` adresi kullanıcı tarafından sağlandığında yalnız bu form adresi `action` olarak kullanılmalıdır. Uydurma form ID ile gönderim açılmamalıdır.
3. Form hizmetinde sunucu tarafı spam koruması, yeniden CAPTCHA değerlendirmesi, `_gotcha` honeypot, alan adı kısıtlaması ve gönderim limiti ayarlanmalı; sadece istemci tarafında bot doğrulaması yeterli değildir.
4. Gerçek servis için `Content-Security-Policy` içindeki `form-action 'none'` yalnız onaylı form alan adına dar kapsamlı değiştirilmelidir. Servis harici kaynaklar gerektiriyorsa gerekçeyle ayrı incelenmelidir.
5. Form hizmetinin gizlilik koşulları ve kişisel verileri yurt dışında işlemesi (KVKK m.9) değerlendirilerek Türkçe ve İngilizce aydınlatma metinleri gönderim açılmadan önce doğru bilgilerle güncellenmelidir.
6. Gönderimin hedef adrese ulaştığı, zorunlu alan kontrolleri, kötü niyetli gönderim filtreleri, erişilebilirlik ve mobil görünüm test edilmelidir.
7. Form açıldığında görüntülenen `Hazırlanıyor/Coming soon` metinleri kaldırılmalı; gönderim yalnız testten sonra etkinleştirilmelidir.
8. KVKK başvuru kanalı ve veri sorumlusu iletişim bilgilerinin bulunabilirliği ayrıca değerlendirilmelidir; yalnızca pasif form bunu sağlamaz.

Formspree dokümanları: https://help.formspree.io/articles/troubleshooting/how-to-prevent-spam/ ; https://formspree.io/library/contact/simple-contact-form/ ; KVKK: https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-
