<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
            return (new MailMessage)
                ->greeting(__('messages.greeting'))
                ->subject(__('messages.verifyEmailAddress'))
                ->line(__('messages.clickToVerify'))
                ->action(__('messages.verifyButton'), $url)
                ->salutation(__('messages.salutation'));
        });
    }
}
