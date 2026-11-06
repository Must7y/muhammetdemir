# KİŞİSEL SİTE — GÜVENLİK VE KVKK KONTROL KAYDI
**Son güncelleme:** 6 Kasım 2026  
**Site:** https://must7y.github.io/muhammetdemir/  
**İletişim formu:** AÇIK (kullanıcının açık tercihi ile). Formspree endpoint: `https://formspree.io/f/mljjvkgq`  
**Hukuki durum:** Tam KVKK onayı VERİLMEDİ; aşağıdaki aktarım ve hesap ayarları eksik. Bu kayıt resmî veya avukat onayı değildir.

## Etkin kontroller (kod incelendi)
- Türkçe ve İngilizce form `POST` ile Formspree bağlantısına gönderir. E-posta ve mesaj zorunlu, ad isteğe bağlıdır.
- Form `_gotcha` honeypot alanına ve istemci tarafında içerik uzunluğu sınırlarına sahiptir. Bunlar sunucu tarafı hız limiti veya kötüye kullanım korumasının yerini almaz.
- Sitelerin Content Security Policy `form-action https://formspree.io` kuralı, istenmeyen diğer form hedeflerini tarayıcı düzeyinde engeller.
- Formun altında tek satırda ABD'deki sağlayıcı bilgisi ve Türkçe/İngilizce gizlilik bağlantısı vardır. Verilerin nereye gittiğini saklamaz.
- Sitenin kendi kodunda reklam/analitik, pazarlama çerezi, localStorage ile dil kaydı, üçüncü taraf Google Fonts ve üyelik/ödeme altyapısı yok.
- Site HTML/JS/CSS içinde alıcı Gmail adresi gösterilmiyor. Geçmiş commit'lerdeki veya arama motoru önbelleğindeki eski adresler ayrıca var olabilir.
- Türkçe ve İngilizce gizlilik sayfaları Formspree, GitHub Pages, veri türleri, kullanım amaçları ve yurt dışına aktarımı açıklıyor. Bu açıklamalar tek başına hukuka uygun aktarım mekanizması oluşturmaz.
- Sağ taraftaki en alta inme oku ve numarasız bölüm tasarımı korunuyor.

## Formspree güvenlik ayarları — kullanıcı ekranında doğrulananlar (6 Kasım 2026)
- Formshield anahtarı: AÇIK (görselde seçili).
- CAPTCHA status: ENABLED; CAPTCHA solution: Google reCAPTCHA; "CAPTCHA settings saved" bildirimi göründü.
- Formspree'nin varsayılan reCAPTCHA doğrulaması, gönderimin ardından Formspree sayfasında görüntülenebilir; GitHub Pages HTML sayfasına ayrıca reCAPTCHA JS eklenmedi.
- Google reCAPTCHA kullanımının veri işleme/çerez etkisi Türkçe ve İngilizce gizlilik metinlerine eklendi.
- Project Settings > Restrict to Domain: henüz doğrulanmadı. Kullanılacak değer: `must7y.github.io` (protokol ve yol olmadan).
- Gelen kutusu / gerçek form teslim testi: doğrulanmadı.

## Sağlayıcı incelemesi (resmî belgeler)
- **Formspree Inc.** ABD'de AWS altyapısı, TLS 1.2+, AES-256 disk şifrelemesi ve WAF kullandığını beyan eder. SOC 2 Type II raporu talep üzerine sunulabilir; bu kontrolde raporun aslı doğrulanmadı.
- İsim/e-posta/mesaj dışında IP, tarayıcı, erişim zamanı ve referer bilgisi işlenebilir. Formspree, kendi gizlilik politikasında üçüncü taraf hizmet sağlayıcılar ve bazı diğer veri kullanımlarını açıklar.
- EU/GDPR Standard Contractual Clauses (SCC) kullandığını söyler; bu metin **Türk KVKK m.9 kapsamında standart sözleşme yapıldığına kanıt değildir.**
- `_gotcha` Formspree tarafından desteklenir; varsayılan reCAPTCHA, alternatif CAPTCHA seçenekleri ve proje düzeyinde `Restrict to Domain` ayarı bulunur. Bu ayarlar **Formspree hesabından doğrulanamadı**.
- E-posta iletileri Formspree kutusunda ve yönlendirilen alıcı hesabında saklanabilir. Fiili saklama süreleri ve eski mesajların silinme durumu hesaptan doğrulanmalı.

## Açık yükümlülükler / öncelikli eylemler
1. **KVKK m.9 aktarım** — ABD'ye kişisel veri aktarımı bakımından geçerli mekanizmanın (örn. Türk standart sözleşmesi ve süresinde bildirim veya uygun başka dayanak) kurulup kurulmadığı doğrulanmadı. Formun kullanıcı tercihiyle açık olması bu eksikliği gidermez. Aydınlatma bağlantısı veya “okudum” kutusu kendiliğinden uygun güvence oluşturmaz. Gerekirse yerel veri işleyen alternatifine geçiş yapılmalı; hukuki değerlendirme alınmalı.
2. **Formspree spam / domain ayarları** — Formspree panelinde `Settings > Spam protection` kapsamında CAPTCHA durumunu kontrol et. `Project Settings > Restrict to Domain` alanına yalnız `must7y.github.io` yaz. Bu ayar `Referer` başlığına dayanır; bazı gizlilik tarayıcıları yanlış pozitif yaratabilir. Sitemizde `strict-origin-when-cross-origin` referer ilkesi var.
3. **Hesap güvenliği** — Formspree ve GitHub hesaplarında 2FA/MFA açılması, form bildirim alıcısının doğrulanması, yetkilerin daraltılması kullanıcı hesabında yapılmalıdır. Bu yönetim panellerine erişim sağlanamadı.
4. **Teslim testi** — Canlı GitHub Pages site açılışı ve bilerek gönderilen test mesajının gerçek alıcıya ulaşması, spam ve mobil görünüm test edilmedi. Sağlayıcının otomatik e-posta doğrulaması gerekiyorsa tamamlanmalı.
5. **KVKK m.10 / m.11 / m.13** — Veri sorumlusu iletişim kanalı ve başvuru usulü somut şartlarda incelenmeli; genel iletişim formu resmî hak başvurusu için her durumda yeterli olmayabilir.
6. **Veri saklama ve hesabın durumu** — Formspree gelen kutusu, bildirim e-postaları, silme ve saklama politikaları hesaptan incelenmeli. Kullanıcıya duyurulan süreç, hesapta uygulanan süreçle tutarlı olmalı.

## Sınırlar
- Bu inceleme GitHub kaynak dosyaları ve kamuya açık sağlayıcı belgelerinden yapıldı. Canlı ortam güvenlik başlıkları/çerezler, form servisinin hesap ayarları ve posta teslimi bağımsız olarak doğrulanamadı.
- Kullanıcının isteği doğrultusunda form yayına açıldı; bu durumun hukuken tamamen sorunsuz olduğu iddia edilmez.
- Yalnızca bu kişisel site kapsamdadır. Pi-Mo gibi çocuklara yönelik uygulamaların KVKK, mağaza ve reklam kuralları ayrı incelenmelidir.

## Kaynaklar
- https://formspree.io/legal/privacy-policy/
- https://formspree.io/legal/terms-of-service/
- https://formspree.io/security/
- https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering/
- https://help.formspree.io/articles/form-and-project-settings/restrict-to-domain/
- https://help.formspree.io/articles/form-and-project-settings/recaptcha-settings/
- https://www.kvkk.gov.tr/Icerik/2053/Yurtdisina-Aktarim
- https://www.kvkk.gov.tr/Icerik/6938/Kurumumuza-Yapilan-Sikayetlerin-Usul-Sartlarina-Iliskin-Kamuoyu-Duyurusu
