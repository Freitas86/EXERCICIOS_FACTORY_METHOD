/*------------ EXERCICIO 01 ------------*/



// Interface Notification
interface Notification {
    send(message: string): void;
  }
  
  // Notificação por e-mail
  class EmailNotification implements Notification {
    send(message: string): void {
      console.log(`Enviando e-mail: ${message}`);
    }
  }
  
  // Notificação por SMS
  class SMSNotification implements Notification {
    send(message: string): void {
      console.log(`Enviando SMS: ${message}`);
    }
  }
  
  // Factory Method
  abstract class NotificationFactory {
    abstract createNotification(): Notification;
  
    sendNotification(message: string): void {
      const notification = this.createNotification();
      notification.send(message);
    }
  }
  
  // Factory concreta para Email
  class EmailNotificationFactory extends NotificationFactory {
    createNotification(): Notification {
      return new EmailNotification();
    }
  }
  
  // Factory concreta para SMS
  class SMSNotificationFactory extends NotificationFactory {
    createNotification(): Notification {
      return new SMSNotification();
    }
  }
  
  // Cliente: Código que usa a Factory para criar e enviar as notificações
  const emailFactory = new EmailNotificationFactory();
  const smsFactory = new SMSNotificationFactory();
  
  emailFactory.sendNotification("Olá, este é um e-mail de teste!");
  smsFactory.sendNotification("Olá, este é um SMS de teste!");
  


  /*------------ EXERCICIO 02 ------------*/

  /*
  // Interface Payment
interface Payment {
    processPayment(amount: number): void;
  }
  
  // Implementação de pagamento via cartão de crédito
  class CreditCardPayment implements Payment {
    processPayment(amount: number): void {
      console.log(`Pagamento de R$${amount} realizado com Cartão de Crédito.`);
    }
  }
  
  // Implementação de pagamento via PayPal
  class PayPalPayment implements Payment {
    processPayment(amount: number): void {
      console.log(`Pagamento de R$${amount} realizado com PayPal.`);
    }
  }
  
  // Implementação de pagamento via boleto bancário
  class BoletoPayment implements Payment {
    processPayment(amount: number): void {
      console.log(`Pagamento de R$${amount} realizado com Boleto Bancário.`);
    }
  }
  
  // Factory Method
  abstract class PaymentFactory {
    abstract createPaymentMethod(): Payment;
  
    processPayment(amount: number): void {
      const paymentMethod = this.createPaymentMethod();
      paymentMethod.processPayment(amount);
    }
  }
  
  // Factory concreta para Cartão de Crédito
  class CreditCardPaymentFactory extends PaymentFactory {
    createPaymentMethod(): Payment {
      return new CreditCardPayment();
    }
  }
  
  // Factory concreta para PayPal
  class PayPalPaymentFactory extends PaymentFactory {
    createPaymentMethod(): Payment {
      return new PayPalPayment();
    }
  }
  
  // Factory concreta para Boleto
  class BoletoPaymentFactory extends PaymentFactory {
    createPaymentMethod(): Payment {
      return new BoletoPayment();
    }
  }
  
  // Cliente: Código que usa a Factory para criar o método de pagamento e processar o pagamento
  const creditCardFactory = new CreditCardPaymentFactory();
  const payPalFactory = new PayPalPaymentFactory();
  const boletoFactory = new BoletoPaymentFactory();
  
  // Exemplo de pagamento com cartão de crédito
  creditCardFactory.processPayment(100);
  
  // Exemplo de pagamento com PayPal
  payPalFactory.processPayment(150);
  
  // Exemplo de pagamento com boleto
  boletoFactory.processPayment(200);
  */

  /*------------ EXERCICIO 03 ------------*/

  /*
  // Interface Media
interface Media {
    play(): void;
    stop(): void;
  }
  
  // Implementação de mídia de áudio
  class AudioMedia implements Media {
    play(): void {
      console.log("Reproduzindo áudio...");
    }
    
    stop(): void {
      console.log("Parando áudio...");
    }
  }
  
  // Implementação de mídia de vídeo
  class VideoMedia implements Media {
    play(): void {
      console.log("Reproduzindo vídeo...");
    }
    
    stop(): void {
      console.log("Parando vídeo...");
    }
  }
  
  // Implementação de mídia de podcast
  class PodcastMedia implements Media {
    play(): void {
      console.log("Reproduzindo podcast...");
    }
    
    stop(): void {
      console.log("Parando podcast...");
    }
  }
  
  // Factory Method
  abstract class MediaFactory {
    abstract createMedia(): Media;
  
    playMedia(): void {
      const media = this.createMedia();
      media.play();
    }
  
    stopMedia(): void {
      const media = this.createMedia();
      media.stop();
    }
  }
  
  // Factory concreta para áudio
  class AudioMediaFactory extends MediaFactory {
    createMedia(): Media {
      return new AudioMedia();
    }
  }
  
  // Factory concreta para vídeo
  class VideoMediaFactory extends MediaFactory {
    createMedia(): Media {
      return new VideoMedia();
    }
  }
  
  // Factory concreta para podcast
  class PodcastMediaFactory extends MediaFactory {
    createMedia(): Media {
      return new PodcastMedia();
    }
  }
  
  // Fábrica de mídia com validação
  class MediaFactoryProvider {
    static getFactory(type: string): MediaFactory {
      switch (type.toLowerCase()) {
        case 'audio':
          return new AudioMediaFactory();
        case 'video':
          return new VideoMediaFactory();
        case 'podcast':
          return new PodcastMediaFactory();
        default:
          throw new Error('Tipo de mídia inválido! Escolha entre "áudio", "vídeo" ou "podcast".');
      }
    }
  }
  
  // Cliente: Código que usa a Factory para criar o tipo de mídia e controlar a reprodução
  try {
    // Escolha o tipo de mídia (audio, video ou podcast)
    const mediaType = 'audio'; // Pode mudar para 'video' ou 'podcast'
  
    // Obter a fábrica correspondente
    const mediaFactory = MediaFactoryProvider.getFactory(mediaType);
  
    // Reproduzir e parar a mídia
    mediaFactory.playMedia();
    mediaFactory.stopMedia();
    
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    // Tentando um tipo inválido de mídia
    const invalidMediaFactory = MediaFactoryProvider.getFactory('document');
  } catch (error) {
    console.error(error.message); // Deve imprimir: "Tipo de mídia inválido! Escolha entre "áudio", "vídeo" ou "podcast"."
  }
  */